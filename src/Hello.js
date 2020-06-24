import React, { useRef } from "react";

export const Hello = () => {
  //   React.useEffect(() => {
  //     console.log("render");

  //     return () => {
  //       console.log("unmount");
  //     };
  //   }, []);
  const renders = useRef(0);

  console.log("hello renders", renders.current++);

  return <div>hello</div>;
};
