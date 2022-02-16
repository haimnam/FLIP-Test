import React from "react";
import "../../scss/Learning.scss";
const HelloHeader = ({ account }) => {
  return <h1>Hello, {account.name}!</h1>;
};

export default HelloHeader;
