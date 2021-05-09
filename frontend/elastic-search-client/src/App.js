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
  const [recommendations, setRecommendations] = useState(null);

  useEffect(() => {
    fetchSearchResults("and")
      .then((res) => {
        setSearchResults(res.hits);
      })
      .catch((err) => console.error(err));
  }, []);

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

  const onCardClick = (id) => {
    const isInList = preferred.find(item => item._id === id);
    if (isInList) {
      window.alert("The book is already marked!");
      return;
    }
    const preferredList = [
      ...preferred,
      searchResults.hits.find((item) => item._id === id),
    ];
    setPreffered(preferredList);
  };

  const onPreferredClick = (id) => {
    const preferredList = preferred.filter((item) => item._id !== id);
    setPreffered(preferredList);
  };

  const clearPreferredList = () => {
    setPreffered([]);
  };

  const onFetchRecommendations = () => {
    fetchRecommendations()
      .then((res) => {
        setRecommendations(res);
      })
      .catch((err) => console.error(err));
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
    return data;
  };

  const queryBuilder = () => {
    let query = {
      from: 0,
      size: preferred.length + 3,
      query: {
        bool: {
          should: [],
        },
      },
    };
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
            query.query.bool.should.push(phraseBuilder(key, genre, 2))
          );
        } else if (key === "author") {
          query.query.bool.should.push(phraseBuilder(key, obj[key]), 1);
        } else {
          query.query.bool.should.push(phraseBuilder(key, obj[key], 1000000));
        }
      });
    });
    return query;
  };

  const phraseBuilder = (key, value, boostvalue) => {
    let phrase;
    phrase = {
      match_phrase: {
        [key]: {
          query: value,
          boost: boostvalue,
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
              onFetchRecommendations={onFetchRecommendations}
            />
          </div>
        </Route>
        <Route path="/recommendations">
          <Recommendations recommendations={recommendations} preferred={preferred} />
        </Route>
        <Route path="/detailed/:id" component={Detailed} />
      </div>
    </Router>
  );
}

export default App;
