import "solid-js";
import { useStore } from "@nanostores/solid";
import { counter } from "../lib/counter";

export const CounterController = () => {
  const counterValue = useStore(counter);

  return (
    <div class="flex flex-row gap-4">
      <button
        class="flex h-12 w-12 place-content-center items-center rounded bg-blue-500 py-2 px-4 text-2xl leading-none text-white"
        onClick={() => {
          counter.set(counterValue() + 1);
        }}
      >
        +
      </button>
      <button
        class="flex h-12 w-12 place-content-center items-center rounded bg-red-500 py-2 px-4 text-2xl leading-none text-white"
        onClick={() => {
          counter.set(counterValue() - 1);
        }}
      >
        -
      </button>
    </div>
  );
};
