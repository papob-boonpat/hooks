import React, { useContext } from "react";
import Comp4 from "./Comp4";

import { useSample } from "../libs/useSample";

function Comp3() {
  const { countUp } = useSample();
  return (
    <div>
      Comp3: <button onClick={countUp}>CountUp</button>
      <Comp4 />
    </div>
  );
}

export default Comp3;
