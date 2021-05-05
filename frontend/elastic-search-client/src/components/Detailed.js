import LinkButton from "./LinkButton";
import ReactStars from "react-rating-stars-component";

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
  const starsConfig = {
    size: 40,
    value: avg_rating,
    edit: false,
    char: "",
  };
  return (
    <div className="container-detailed">
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
          Search score: <strong>{_score}</strong>
        </h6>
        <h6>Average rating: {avg_rating}</h6>
        <ReactStars {...starsConfig} />
        Genres:{" "}
        {genres.length ? (
          genres.map((genre) => (
            <li key={genreID++}>
              <small>
                {" "}
                <i>{genre}</i>
              </small>
            </li>
          ))
        ) : (
          <i>...not specified</i>
        )}
        <br />
        <p># of pages: {num_pages}</p>
        <p>Language: {language}</p>
        <p>ISBN: {isbn13}</p>
        <p>
          Published: {publish_date} <a href={url}> Check out the book here!</a>
        </p>
      </section>
    </div>
  );
};

export default Detailed;
