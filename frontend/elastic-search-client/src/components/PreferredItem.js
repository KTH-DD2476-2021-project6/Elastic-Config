import { FaTimes } from "react-icons/fa";

const PreferredItem = ({ item, index, onPreferredClick }) => {
  return (
    <h6 style={{ display: "flex" }}>
      {index}. {item.title}{" "}
      <FaTimes
        className="mx-1"
        style={{ color: "red", cursor: "pointer" }}
        onClick={() => onPreferredClick(item._id)}
      />
    </h6>
  );
};

export default PreferredItem;
