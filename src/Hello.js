import React, { memo } from "react";
import { useCountRenders } from "./useCountRenders";
export const Hello = memo(({ increment }) => {
  useCountRenders();
  return (
    <div>
      <button onClick={() => increment(5)}>increment</button>
    </div>
  );
});
