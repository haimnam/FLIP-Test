import React from "react";
import styles from "../../scss/ScheduleAndChat.module.scss";

const Timezone = () => {
  return (
    <div className={styles.timezone}>
      <h2>Timezone converter</h2>
      <div className={styles.converterContainer}>
        <div className={styles.converterItemColored}>
          <div className={styles.city}>
            <div className={styles.cityName}>New York</div>
            <div className={styles.now}>now</div>
          </div>
          <div className={styles.time}>
            <div>3</div>
            <div>30</div>
            <div className={styles.ampm}>am</div>
          </div>
          <div className={styles.date}>
            <div>12</div>
            <div>/</div>
            <div>28</div>
            <div className={styles.day}>Tuesday</div>
          </div>
        </div>
        <div className={styles.converterItem}>
          <div className={styles.city}>
            <div className={styles.cityName}>Seoul +14hrs</div>
          </div>
          <div className={styles.time}>
            <div>00</div>
            <div>00</div>
            <div className={styles.ampm}>pm</div>
          </div>
          <div className={styles.date}>
            <div>12</div>
            <div>/</div>
            <div>28</div>
            <div className={styles.day}>Tuesday</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timezone;
