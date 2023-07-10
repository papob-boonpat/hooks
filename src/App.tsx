import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Sample from "./Components/Sample";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <button
        onClick={() => {
          setShow((prev) => !prev);
        }}
      >
        {show ? "hide" : "show"}
      </button>
      <br />
      {show ? <Sample /> : null}
    </div>
  );
}

export default App;
