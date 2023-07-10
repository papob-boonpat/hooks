import React, { useContext } from "react";

import { useSample } from "../libs/useSample";

function Comp4() {
  const { val } = useSample();
  return <div>Comp4: {val}</div>;
}

export default Comp4;
