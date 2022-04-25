import React from "react";
import { Link } from "react-router-dom";
import styles from "./HowToMeet.module.scss";
import InfoIcon from "@mui/icons-material/Info";

const HowToMeet = () => {
  return (
    <div className={styles.howToMeetFlex}>
      <div className={styles.howToMeet}>
        Check out{" "}
        <Link className={styles.howToMeetLink} to="/learning">
          How to Meet
        </Link>{" "}
        for instructions on how to meet your partner
      </div>
      <div className={styles.infoIcon}>
        <InfoIcon />
      </div>
    </div>
  );
};

export default HowToMeet;
