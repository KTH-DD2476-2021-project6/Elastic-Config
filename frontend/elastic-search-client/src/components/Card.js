const Card = ({ item, onCardClick }) => {
  let genreID = 0;
  const { id, image, name, avg_rating, genres } = item;
  return (
    <div className="col-md-4 cardElement scrollable">
      <div
        className="card mb-3 shadow cardHover"
        onClick={() => {
          onCardClick(id);
        }}
      >
        <div className="card-image-container">
          <img className="card-img-top cardImage" src={image} alt="Cover" />
        </div>
        <div className="card-body">
          <small className="card-text">
            <b>{name}</b>
          </small>
          <br />
          <small className="card-text">Average rating: {avg_rating}</small>
          <br />
          <small className="card-text">
            Genres -
            {genres ? (
              genres.map((genre) => <i key={genreID++}> {genre}, </i>)
            ) : (
              <i> not specified...</i>
            )}
          </small>
        </div>
      </div>
    </div>
  );
};

export default Card;
