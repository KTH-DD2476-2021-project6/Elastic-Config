const Button = ({ type, text, onClick }) => {
  const btnStyles = { marginLeft: 10 };
  return (
    <button
      style={btnStyles}
      className="btn btn-sm btn-success border-black"
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
