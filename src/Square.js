import React, { memo } from "react";
import { useCountRenders } from "./useCountRenders";
export const Square = memo(({ increment, n }) => {
  useCountRenders();
  return <button onClick={() => increment(n)}>{n}</button>;
});
