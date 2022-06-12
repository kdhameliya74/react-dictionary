import React, { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import ResultTile from "./components/ResultTile";

function App() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState([]);
  const [error, setError] = useState(null);

  const clickHandler = async () => {
    if (!keyword) {
      setError("Please enter keyword!");
      return;
    }
    await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + keyword)
      .then((res) => res.json())
      .then((response) => {
        setResult(response);
      });
  };

  const inputHandler = (e) => {
    setResult([])
    if (!!error) setError(null);
    setKeyword(e.target.value);
  };

  const handleKeypress = (e) => {
    if (e.code === 'Enter') {
      setKeyword(e.target.value);
      clickHandler()
    }
  }

  return (
    <div className="App">
      <section className="top">
        <Input
          className={error ? "error-border" : null}
          onInput={inputHandler}
          placeholder="Search your word!"
          name="search-word"
          onKeyPress={handleKeypress}
        />
        <Button name={"Search"} onClick={clickHandler} />
      </section>
      {(result.length > 0 && keyword ) && (<ResultTile word={keyword} searchResult={result} />)}
      {(result?.message && result?.title) && (
        <div className="no-result">
          <h2 className="no-result-title"> {result.title}  </h2>
          <p> {result.message} </p>
        </div>
      )}
    </div>
  );
}

export default App;
