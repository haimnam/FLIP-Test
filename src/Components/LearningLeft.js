import React from "react";
import "../scss/App.scss";
import HelloHeader from "./LearningLeft/HelloHeader";
import Calendar from "./LearningLeft/Calendar";
import UserInfo from "./LearningLeft/UserInfo";

const LearningLeft = ({ account, students }) => {
  return (
    <div className="learningLeft">
      <HelloHeader account={account} />
      <Calendar students={students} />
      <UserInfo students={students} />
    </div>
  );
};

export default LearningLeft;
