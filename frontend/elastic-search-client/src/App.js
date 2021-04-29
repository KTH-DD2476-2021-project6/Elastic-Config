import Header from "./components/Header";
import { useState } from "react";
import SearchBar from "./components/SearchBar";

function App() {
  const [input, setInput] = useState("");

  const onInputChange = (text) => {
    setInput(text);
    console.log(text);
  };
  return (
    <div className="container">
      <Header title="Book Recommendation's - Elastic Search" />
      <SearchBar value={input} onChange={onInputChange} />
    </div>
  );
}

export default App;
