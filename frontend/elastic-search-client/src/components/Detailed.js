import LinkButton from "./LinkButton";
import Rating from "react-rating";

const Detailed = (props) => {
  const { _score, _source } = props.location.state.data;
  const {
    title,
    author,
    url,
    avg_rating,
    genres,
    isbn13,
    language,
    num_pages,
    publish_date,
  } = _source;
  let genreID = 0;
  return (
    <div className="container">
      <LinkButton
        to="/recommendations"
        className="btn btn-sm btn-warning border-black"
      >
        Back
      </LinkButton>
      <section className="album-section my-3">
        <h1>{title}</h1>
        <h3>{author}</h3>
        <h6>
          {" "}
          <strong>Search score:</strong> {_score}
        </h6>
        <h6>Published: {publish_date}</h6>
        <h6>Average rating: {avg_rating}</h6>
        <Rating initialRating={avg_rating} readonly />
        <br />
        Genres:{" "}
        {genres.length ? (
          genres.map((genre) => <li key={genreID++}>{genre}</li>)
        ) : (
          <i>...not specified</i>
        )}
        <br />
        <p># of pages: {num_pages}</p>
        <p>Language: {language}</p>
        <p>ISBN: {isbn13}</p>
        <a href={url}>Check out the book here!</a>
      </section>
    </div>
  );
};

export default Detailed;
