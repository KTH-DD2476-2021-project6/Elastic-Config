import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import PreferredList from "./components/PreferredList";
import Recommendations from "./components/Recommendations";
import Detailed from "./components/Detailed";

function App() {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [preferred, setPreffered] = useState([]);

  /*
  useEffect(() => {
    const loadTop50 = async () => {
      const API_RESULTS = await fetchResults("TOP_50");
      setSearchResults(API_RESULTS);
    };
    loadTop50();
  }, []);
  */

  const onInputChange = (text) => {
    setInput(text);
  };

  const onSearch = () => {
    fetchSearchResults(input)
      .then((res) => {
        setSearchResults(res.hits);
      })
      .catch((err) => console.error(err))
      .finally(() => setInput(""));
  };

  const fetchSearchResults = async (text) => {
    const res = await fetch(
      `http://localhost:9200/book_index/_doc/_search/?q=${text}`
    );
    const data = await res.json();

    return data;
  };

  const fetchRecommendations = async () => {
    const query = queryBuilder();
    const res = await fetch("http://localhost:9200/book_index/_doc/_search/", {
      crossDomain: true,
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(query),
    });
    const data = await res.json();
    console.log("RECOMMENDATIONS: ", data);
    return data;
  };

  const onCardClick = (id) => {
    const preferredList = [
      ...preferred,
      searchResults.hits.find((item) => item._id === id),
    ];
    setPreffered(preferredList);
    console.log("SEARCH RESULTS: ", searchResults);
  };

  const onPreferredClick = (id) => {
    const preferredList = preferred.filter((item) => item._id !== id);
    setPreffered(preferredList);
  };

  const clearPreferredList = () => {
    setPreffered([]);
  };

  const queryBuilder = () => {
    let query = {
      query: {
        bool: {
          should: [],
        },
      },
    };

    console.log("PREFERREDLIST: ", preferred);
    const prettyConvert = preferred.map((item) => ({
      author: item._source.author,
      genres: item._source.genres,
      language: item._source.language,
    }));

    prettyConvert.forEach((obj) => {
      Object.keys(obj).forEach((key) => {
        if (!obj[key]) {
          return;
        }
        if (key === "genres") {
          obj[key].forEach((genre) =>
            query.query.bool.should.push(phraseBuilder(key, genre))
          );
        } else {
          query.query.bool.should.push(phraseBuilder(key, obj[key]));
        }
      });
    });

    console.log("QUERY OBJECT: ", JSON.stringify(query));
    return query;
  };

  const phraseBuilder = (key, value) => {
    let phrase;
    phrase = {
      match_phrase: {
        [key]: {
          query: value,
        },
      },
    };
    return phrase;
  };

  return (
    <Router>
      <div className="app-base">
        <Route path="/" exact>
          <div className="container">
            <div>
              <Header title="Book Recommendation's - Elastic Search" />
              <SearchBar
                value={input}
                onChange={onInputChange}
                onSearch={onSearch}
              />
              <SearchResults
                results={searchResults}
                onCardClick={onCardClick}
              />
            </div>
          </div>
          <div className="container-cart">
            <PreferredList
              preferred={preferred}
              onPreferredClick={onPreferredClick}
              clearPreferredList={clearPreferredList}
              onGetRecommendationsClick={fetchRecommendations}
            />
          </div>
        </Route>
        <Route path="/recommendations" component={Recommendations} />
        <Route path="/detailed/:id" component={Detailed} />
      </div>
    </Router>
  );
}

export default App;
