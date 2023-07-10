import React, { useEffect, useRef, useState } from "react";

function Sample() {
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  const handle = () => {
    alert(inputRef.current?.value);
  };
  const handleDiv = () => {
    console.log("width:", divRef.current?.clientWidth);
    console.log("height:", divRef.current?.clientHeight);
  };

  return (
    <div>
      Something: <input type="text" ref={inputRef} />
      <button onClick={handle}>Show Alert</button>
      <div
        style={{
          width: Math.random() * 1000,
          height: Math.random() * 300,
          backgroundColor: "blue",
        }}
        ref={divRef}
      ></div>
      <button onClick={handleDiv}>Show Size</button>
    </div>
  );
}

export default Sample;
