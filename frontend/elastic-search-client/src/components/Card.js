const Card = ({ item, onCardClick }) => {
  let genreID = 0;
  const { _id, _score } = item;
  const { title, author, avg_rating, genres, language } = item._source;

  return (
    <div className="col-md-4 cardElement">
      <div
        className="card text-white mb-3 shadow cardHover bg-dark"
        onClick={() => {
          onCardClick(_id);
        }}
      >
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
              genres.map((genre) => (
                <small key={genreID++}>
                  <i key={genreID++}> {genre}, </i>{" "}
                </small>
              ))
            ) : (
              <i> ...not specified</i>
            )}
          </small>
          <br />
          <small>
            <b className="card-text">{language}</b>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Card;
