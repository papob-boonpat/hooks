import React, { useContext } from "react";
import Comp3 from "./Comp3";
import { useSample } from "../libs/useSample";

function Comp2() {
  const { count } = useSample();
  return (
    <div>
      Comp2: {count}
      <Comp3 />
    </div>
  );
}

export default Comp2;
