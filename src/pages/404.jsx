import React from "react";
import { useLayoutEffect } from "react";

const ErrorPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return <div>404 Error</div>;
};

export default ErrorPage;
