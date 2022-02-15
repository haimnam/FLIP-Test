import React from "react";
import "../../css/Learning.css";
import InfoIcon from "@mui/icons-material/Info";

const HowToMeet = () => {
  return (
    <div className="howToMeetFlex">
      <div className="howToMeet">
        Check out{" "}
        <a className="howToMeetLink" href="#">
          How to Meet
        </a>{" "}
        for instructions on how to meet your partner
      </div>
      <div className="infoIcon">
        <InfoIcon />
      </div>
    </div>
  );
};

export default HowToMeet;
