import { useStore } from "@nanostores/react";
import { useEffect } from "react";
import { counter } from "../lib/counter";

export const CounterDisplay = () => {
  const counterValue = useStore(counter);

  useEffect(() => {
    console.log("Counter changed value", counterValue);
  }, [counterValue]);

  return (
    // @ts-ignore
    <div className="w-full bg-slate-200 py-8 px-2 text-center text-5xl font-bold text-black">
      {counterValue}
    </div>
  );
};
