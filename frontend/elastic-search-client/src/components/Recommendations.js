import LinkButton from "./LinkButton";
import Card from "./Card";
import { useHistory } from "react-router-dom";

const Recommendations = ({ recommendations }) => {
  const test = {
    took: 5,
    timed_out: false,
    _shards: {
      total: 1,
      successful: 1,
      skipped: 0,
      failed: 0,
    },
    hits: {
      total: {
        value: 2,
        relation: "eq",
      },
      max_score: 0.99270093,
      hits: [
        {
          _index: "book_index",
          _type: "_doc",
          _id: "1",
          _score: 0.99270093,
          _source: {
            url: "https://www.goodreads.com/book/show/2199.Team_of_Rivals",
            title: "Team of Rivals: The Political Genius of Abraham Lincoln",
            author: "Doris Kearns Goodwin",
            num_ratings: 164350,
            num_reviews: 7315,
            avg_rating: 4.24,
            num_pages: 916,
            language: "English",
            publish_date: "2006-09-26 00:00:00",
            original_publish_year: 2005,
            genres: [
              "North American Hi...",
              "American History",
              "History",
              "Audiobook",
              "Historical",
              "Civil War",
              "Biography",
              "Presidents",
              "Leadership",
              "Politics",
              "Military History",
              "Nonfiction",
            ],
            awards: [
              "Benjamin Barondess Award (2006)",
              "Lincoln Prize (2006)",
              "National Book Critics Circle Award Nominee for Biography (2005)",
              "New-York Historical Society American History Book Prize",
            ],
            characters: [
              "Abraham Lincoln",
              "William H. Seward",
              "Edwin McMasters Stanton",
              "Salmon P. Chase",
              "Edward Bates",
            ],
            places: ["Springfield, Illinois", "Chicago, Illinois", "Illinois"],
            isbn: "0743270754",
            isbn13: "9780743270755",
            rating_histogram: {
              5: 89209,
              4: 44984,
              3: 17493,
              2: 6235,
              1: 6429,
            },
          },
        },
        {
          _index: "book_index",
          _type: "_doc",
          _id: "13",
          _score: 0.99270093,
          _source: {
            url: "https://www.goodreads.com/book/show/11084145-steve-jobs",
            title: "Steve Jobs",
            author: "Walter Isaacson",
            num_ratings: 1013785,
            num_reviews: 18986,
            avg_rating: 4.14,
            num_pages: 627,
            language: "English",
            publish_date: "2011-10-24 00:00:00",
            original_publish_year: 2011,
            genres: [
              "Science",
              "Memoir",
              "History",
              "Audiobook",
              "Biography Memoir",
              "Autobiography",
              "Business",
              "Biography",
              "Technology",
              "Leadership",
              "Nonfiction",
            ],
            awards: [
              "Financial Times and McKinsey Business Book of the Year Nominee for Shortlist (2012)",
              "Goodreads Choice Award for History & Biography (2011)",
              "Premio Know Square (2011)",
            ],
            characters: ["Steve Jobs"],
            places: ["San Francisco Bay Area, California"],
            isbn: "1451648537",
            isbn13: "9781451648539",
            rating_histogram: {
              5: 470291,
              4: 329745,
              3: 139102,
              2: 37755,
              1: 36892,
            },
          },
        },
      ],
    },
  };
  const history = useHistory();
  const onCardClick = (id, data) =>
    history.push(`/detailed/${id}`, { data: data });
  console.log(recommendations);

  return (
    <div className="container">
      <LinkButton to="/" className="btn btn-sm btn-warning border-black">
        Back
      </LinkButton>
      <section className="album-section my-5 scrollable">
        {test.hits.hits?.length ? (
          <div className="album py-3 bg-light">
            <div className="row mx-2">
              {test.hits.hits.map((result) => (
                <Card
                  key={result._id}
                  item={result}
                  onCardClick={() => onCardClick(result._id, result)}
                />
              ))}
            </div>
          </div>
        ) : (
          <p>
            {" "}
            <strong>No results found!</strong>
          </p>
        )}
      </section>
    </div>
  );
};

export default Recommendations;
