import React, { useContext, useState } from "react";
import Comp2 from "./Comp2";
import { useSample } from "../libs/useSample";

function Comp1() {
  const { val, setVal } = useSample();
  return (
    <div>
      Comp1
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <Comp2 />
    </div>
  );
}

export default Comp1;
