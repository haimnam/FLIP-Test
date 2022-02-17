import React from "react";
import styles from "../../scss/Learning.module.scss";
import InfoIcon from "@mui/icons-material/Info";

const HowToMeet = () => {
  return (
    <div className={styles.howToMeetFlex}>
      <div className={styles.howToMeet}>
        Check out{" "}
        <a className={styles.howToMeetLink} href="#">
          How to Meet
        </a>{" "}
        for instructions on how to meet your partner
      </div>
      <div className={styles.infoIcon}>
        <InfoIcon />
      </div>
    </div>
  );
};

export default HowToMeet;
