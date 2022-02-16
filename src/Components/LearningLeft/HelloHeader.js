import React from "react";
import styles from "../../scss/Learning.module.scss";
const HelloHeader = ({ account }) => {
  return <h1>Hello, {account.name}!</h1>;
};

export default HelloHeader;
