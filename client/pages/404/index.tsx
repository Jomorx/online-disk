import Router from "next/router";
import React, { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    Router.push("/drive");
  }, []);
  return <div>NotFound</div>;
};

export default NotFound;
