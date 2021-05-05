import Card from "./Card";

const SearchResults = ({ results, onCardClick }) => {
  return (
    <section className="album-section">
      {results.hits?.length ? (
        <div className="album py-3 bg-light">
          <div className="row mx-2">
            {results.hits.map((result) => (
              <Card key={result._id} item={result} onCardClick={onCardClick} />
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
  );
};

export default SearchResults;
