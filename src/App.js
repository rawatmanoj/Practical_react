import React, { useState, useCallback, useEffect } from "react";
// import { useForm } from "./useForm";
import Hello from "./Hello";
// import { Square } from "./Square";
// // import { useFetch } from "./useFetch";
// import { useCountRenders } from "./useCountRenders";

const App = () => {
  // useCountRenders();

  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log(`You clicked ${count} times`);
  //   }, 3000);
  // });

  // return (
  //   <div>
  //     <p>You clicked {count} times</p>
  //     <button onClick={() => setCount(count + 1)}>Click me</button>
  //   </div>
  // );
  return (
    <div>
      <Hello />
    </div>
  );
};

export default App;
