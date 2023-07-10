import React, { useEffect, useRef, useState } from "react";

function Sample() {
  const [count, setCount] = useState(0);
  const isFirstTime = useRef(true);

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
      return;
    }

    console.log(count);
  }, [count]);

  return (
    <div>
      Count: {count}
      <br />
      <button
        onClick={() => {
          setCount((prev) => ++prev);
        }}
      >
        Count Up
      </button>
      <button onClick={() => {}}>Show Me</button>
    </div>
  );
}

export default Sample;
