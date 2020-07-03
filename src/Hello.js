import React, { memo, useEffect, useState } from "react";
import { useCountRenders } from "./useCountRenders";
const Hello = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + step);
    }, 1000);
    return () => clearInterval(id);
  }, [step]);

  return (
    <>
      <h1>{count}</h1>
      <input value={step} onChange={(e) => setStep(Number(e.target.value))} />
    </>
  );
};

// const Hello = () => {
//   // useCountRenders();

//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       console.log(`You clicked ${count} times`);
//     }, 3000);
//   });

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </div>
//   );
// };

export default Hello;
