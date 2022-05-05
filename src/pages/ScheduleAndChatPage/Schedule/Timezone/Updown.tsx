import React from "react";
import styles from "./Timezone.module.scss";

const Updown = ({ setUp, setDown }) => {
  return (
    <div className={styles.updown}>
      <img
        src={process.env.PUBLIC_URL + "/img/arrow/arrow.png"}
        className={styles.upArrow}
        onClick={setUp}
      />
      <img
        src={process.env.PUBLIC_URL + "/img/arrow/arrow.png"}
        className={styles.downArrow}
        onClick={setDown}
      />
    </div>
  );
};

export default Updown;
