import React from "react";
import styles from "../../scss/ScheduleAndChat.module.scss";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

const Updown = ({ width, height, setUp, setDown }) => {
  return (
    <div className={styles.upDown}>
      <div style={{ height }}>
        <KeyboardArrowUp
          style={{
            width,
            overflow: "hidden",
            marginTop: "-50%",
          }}
          onClick={setUp}
        />
      </div>
      <div style={{ height }}>
        <KeyboardArrowDown
          style={{
            width,
            overflow: "hidden",
            marginTop: "-50%",
          }}
          onClick={setDown}
        />
      </div>
    </div>
  );
};

export default Updown;
