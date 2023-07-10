import React, { useEffect, useState } from "react";

function Sample() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("mounted");
    return () => {
      console.log("unmount");
    };
  }, []);

  useEffect(() => {
    console.log(count);
    return () => {
      console.log("cleanup");
    };
  }, [count]);

  return (
    <div>
      Count: {count}
      <br />
      <button onClick={() => setCount((prev) => --prev)}>-</button>
      <button onClick={() => setCount((prev) => ++prev)}>+</button>
    </div>
  );
}

export default Sample;
