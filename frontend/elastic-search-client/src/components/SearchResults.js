import Card from "./Card";

const SearchResults = ({ results, onCardClick }) => {
  return (
    <section className="album-section">
      {results ? (
        <div className="album py-3 bg-light">
          <div className="row mx-2">
            {results.map((author) => (
              <Card key={author.id} item={author} onCardClick={onCardClick} />
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
