import React from "react";
import "../css/App.css";
import LearningLeft from "./LearningLeft";
import LearningRight from "./LearningRight";

const Learning = ({ account, students, recommendation }) => {
  return (
    <div className="learning">
      <LearningLeft account={account} students={students} />
      <LearningRight recommendation={recommendation} />
    </div>
  );
};

export default Learning;
