import { createContext, useContext, useState } from "react";

type Sample = {
  val: string;
  setVal: (value: string) => void;
  count: number;
  countUp: () => void;
};

export const SampleContext = createContext<Sample>(null!);

export const SampleProvider = (props: { children: React.ReactNode }) => {
  const [value, setValue] = useState("");
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount((prev) => ++prev);
  };

  return (
    <SampleContext.Provider
      value={{ val: value, setVal: setValue, count, countUp }}
    >
      {props.children}
    </SampleContext.Provider>
  );
};

export const useSample = () => useContext(SampleContext);
