import Header from "./components/Header";
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";

function App() {
  const [input, setInput] = useState("");

  const onInputChange = (text) => {
    setInput(text);
  };

  return (
    <div className="container">
      <Header title="Book Recommendation's - Elastic Search" />
      <SearchBar value={input} onChange={onInputChange} />
      <BookList />
    </div>
  );
}

export default App;
