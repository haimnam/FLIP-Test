import React from "react";
import styles from "../../scss/ScheduleAndChat.module.scss";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

const Updown = ({ width, height }) => {
  return (
    <div className={styles.upDown}>
      <div style={{ height }}>
        <KeyboardArrowUp
          style={{
            width,
            overflow: "hidden",
            marginTop: "-50%",
          }}
        />
      </div>
      <div style={{ height: height }}>
        <KeyboardArrowDown
          style={{
            width,
            overflow: "hidden",
            marginTop: "-50%",
          }}
        />
      </div>
    </div>
  );
};

export default Updown;
