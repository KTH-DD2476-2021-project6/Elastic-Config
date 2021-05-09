import LinkButton from "./LinkButton";
import Card from "./Card";
import { useHistory } from "react-router-dom";

const Recommendations = ({ recommendations }) => {
  const history = useHistory();
  const onCardClick = (id, data) =>
    history.push(`/detailed/${id}`, { data: data });

  return (
    <div className="container">
      <LinkButton to="/" className="btn btn-sm btn-warning border-black">
        Back
      </LinkButton>
      <section className="album-section my-5 scrollable">
        {recommendations?.hits.hits.length ? (
          <div className="album py-3 bg-light">
            <div className="row mx-2">
              {recommendations.hits.hits.map((result) => (
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
