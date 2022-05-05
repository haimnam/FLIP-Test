import React from "react";
import styles from "./Profile.module.scss";

const Profile = ({ color, initial, size, position }) => {
  if (position) {
    return (
      <div
        className={
          size === "small" ? styles[`${color}AbsSmall`] : styles[`${color}Abs`]
        }
      >
        <span className={styles.initial}>{initial}</span>
      </div>
    );
  }
  return (
    <div className={size === "small" ? styles[`${color}Small`] : styles[color]}>
      <span className={styles.initial}>{initial}</span>
    </div>
  );
};

export default Profile;
