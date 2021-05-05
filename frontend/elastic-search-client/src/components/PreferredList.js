import PreferredItem from "./PreferredItem";
import Button from "./Button";
import LinkButton from "./LinkButton";

const PreferredList = ({
  preferred,
  onPreferredClick,
  clearPreferredList,
  onGetRecommendationsClick,
}) => {
  let index = 1;

  return (
    <>
      <div className="preferred-list">
        {preferred.length ? (
          preferred.map((item) => (
            <PreferredItem
              item={item._source}
              index={index++}
              onPreferredClick={onPreferredClick}
              key={item._id}
            />
          ))
        ) : (
          <p>Mark books that you like and get recommendations of new books!</p>
        )}
      </div>
      <div className="btn-group mt-1">
        <Button
          className="btn btn-sm btn-danger border-black mx-1"
          type="button"
          text="Clear"
          onClick={clearPreferredList}
          disabled={!preferred.length}
        />
        <LinkButton className="btn btn-sm btn-success border-black" disabled={!preferred.length} to="/recommendations" onClick={() => onGetRecommendationsClick()}>Get recommendations!</LinkButton>
      </div>
    </>
  );
};

export default PreferredList;
