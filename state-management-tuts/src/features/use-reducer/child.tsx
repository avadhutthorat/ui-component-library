import React from "react";

const Child = ({ val }) => {
  console.log("Child updates", val);
  return <div>Child {val}</div>;
};

export default Child;
