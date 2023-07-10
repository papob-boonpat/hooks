import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Sample from "./Components/Sample";

function App() {
  const [show, setShow] = useState(false);
  const a = ["a", "b", "c"];
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
      {show ? <Sample some={a} /> : null}
    </div>
  );
}

export default App;
