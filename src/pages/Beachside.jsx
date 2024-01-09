import React from "react";
import { useLayoutEffect } from "react";

const Beachside = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return <div>Beachside</div>;
};

export default Beachside;
