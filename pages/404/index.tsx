import { useRouter } from "next/router";
import React, { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/drive");
  }, []);
  return <h1>404</h1>;
};

export default NotFound;
