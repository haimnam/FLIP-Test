import React from "react";
import styles from "../../scss/ScheduleAndChat.module.scss";
import { TimesData } from "./TimesData.tsx";

const PreferredTimes = () => {
  return (
    <div className={styles.preferredTimes}>
      <h2>Select your preferred times</h2>
      <div className={styles.timeTable}>
        <div className={styles.tableHead}>
          <div className={styles.overlappingTimes}>Overlapping times</div>
          <div className={styles.partnerPick}>Samuel's pick</div>
          <div className={styles.myPick}>Your pick</div>
        </div>
        <div className={styles.tableBody}>
          {TimesData.map((time, index) => {
            return (
              <div key={index} className={styles.row}>
                <div className={styles.overlappingTimes}>
                  <h3>{time.main}</h3>
                  <div>{time.sub}</div>
                </div>
                <div className={styles.partnerPick}>{time.partnerPick}</div>
                <div className={styles.myPick}>{time.myPick}</div>
                <div className={styles.state}>{time.state}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PreferredTimes;
