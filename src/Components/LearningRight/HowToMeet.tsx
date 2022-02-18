import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import styles from "../../scss/Learning.module.scss";
import InfoIcon from "@mui/icons-material/Info";

const HowToMeet = () => {
  return (
    <BrowserRouter>
      <div className={styles.howToMeetFlex}>
        <div className={styles.howToMeet}>
          Check out{" "}
          <Link className={styles.howToMeetLink} to="/">
            How to Meet
          </Link>{" "}
          for instructions on how to meet your partner
        </div>
        <div className={styles.infoIcon}>
          <InfoIcon />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default HowToMeet;
