import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

export default function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  countRef.current = count;

  function handleAlertClick() {
    setTimeout(() => {
      alert("you clicked " + countRef.current);
    }, 3000);
  }

  // useEffect(() => {
  //   setTimeout(() => {
  //     alert("You clicked on: " + countRef.current);
  //   }, 3000);
  // }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={handleAlertClick}>Show alert</button>
    </div>
  );
}
