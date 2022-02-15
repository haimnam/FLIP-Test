import React from "react";
import "../Learning.css";

const HelloHeader = ({ account }) => {
  return <h1>Hello, {account.name}!</h1>;
};

export default HelloHeader;
