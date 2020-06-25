import React, { useState, useCallback } from "react";
// import { useForm } from "./useForm";
import { Hello } from "./Hello";
import { Square } from "./Square";
// import { useFetch } from "./useFetch";
import { useCountRenders } from "./useCountRenders";

const App = () => {
  // useCountRenders();
  const [count, setCount] = useState(0);
  const nums = [7, 21, 37, 42];

  const increment = useCallback(
    (n) => {
      setCount((count) => (count = count + n));
    },
    [setCount]
  );

  return (
    <div>
      {/* <div>
        <Hello increment={increment} />
      </div> */}
      {nums.map((num, i) => {
        return <Square increment={increment} key={i} n={num} />;
      })}

      <div>{count}</div>
    </div>
  );
};

export default App;
