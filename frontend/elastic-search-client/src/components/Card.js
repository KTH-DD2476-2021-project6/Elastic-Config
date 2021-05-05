const Card = ({ item, onCardClick }) => {
  let genreID = 0;
  const { _id, _score } = item;
  const { title, author, avg_rating, genres, language } = item._source;
  return (
    <div className="col-md-4 cardElement">
      <div
        className="card mb-3 shadow cardHover"
        onClick={() => {
          onCardClick(_id);
        }}
      >
        {/*<div className="card-image-container">
          <img className="card-img-top cardImage" src={url} alt="Cover" />
        </div>*/}
        <div className="card-body">
          <small className="card-text">
            <p>
              <b>{title}</b>
            </p>
            <p>
              <i>{author}</i>
            </p>
            <p>Score: {_score}</p>
            <p>Average rating: {avg_rating}</p>
          </small>
          <small className="card-text">
            <b>Genres: </b>
            {genres ? (
              genres.map((genre) => <i key={genreID++}> {genre}, </i>)
            ) : (
              <i> ...not specified</i>
            )}
          </small>
          <small className="card-text">{language}</small>
        </div>
      </div>
    </div>
  );
};

export default Card;
