import React from "react";
import styles from "../../scss/ScheduleAndChat.module.scss";

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
          <div className={styles.row}>
            <div className={styles.overlappingTimes}>
              <h3>Tuesday 3:00 pm</h3>
              <div>Wednesday 5:00 am KST</div>
            </div>
            <div className={styles.partnerPick}></div>
            <div className={styles.myPick}>(sq)</div>
            <div className={styles.state}>Finalize</div>
          </div>

          <div className={styles.row}>
            <div className={styles.overlappingTimes}>
              <h3>Tuesday 3:00 pm</h3>
              <div>Wednesday 5:00 am KST</div>
            </div>
            <div className={styles.partnerPick}></div>
            <div className={styles.myPick}>(sq)</div>
            <div className={styles.state}>Finalize</div>
          </div>

          <div className={styles.row}>
            <div className={styles.overlappingTimes}>
              <h3>Tuesday 3:00 pm</h3>
              <div>Wednesday 5:00 am KST</div>
            </div>
            <div className={styles.partnerPick}></div>
            <div className={styles.myPick}>(sq)</div>
            <div className={styles.state}>Finalize</div>
          </div>

          <div className={styles.row}>
            <div className={styles.overlappingTimes}>
              <h3>Tuesday 3:00 pm</h3>
              <div>Wednesday 5:00 am KST</div>
            </div>
            <div className={styles.partnerPick}></div>
            <div className={styles.myPick}>(sq)</div>
            <div className={styles.state}>Finalize</div>
          </div>

          <div className={styles.row}>
            <div className={styles.overlappingTimes}>
              <h3>Tuesday 3:00 pm</h3>
              <div>Wednesday 5:00 am KST</div>
            </div>
            <div className={styles.partnerPick}></div>
            <div className={styles.myPick}>(sq)</div>
            <div className={styles.state}>Finalize</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreferredTimes;
