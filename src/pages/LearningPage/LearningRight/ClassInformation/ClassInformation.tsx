import React from "react";
import { Link } from "react-router-dom";
import styles from "./ClassInformation.module.scss";
import InfoIcon from "@mui/icons-material/Info";

const ClassInformation = () => {
  return (
    <div className={styles.classInfo}>
      <div className={styles.information}>
        <span className={styles.classTitle}>Class Information</span>
        <div className={styles.classBody}>
          <div className={styles.classFrame}>
            <span className={styles.infoTitle}>336 3rd Year Korean</span>
            <span className={styles.infoTitle}>University of Michigan</span>
          </div>
          <div className={styles.professorFrame}>
            <span className={styles.infoTitle}>Prof. Soyeon Kim</span>
            <span className={styles.infoContent}>soyeon.kim@umich.edu</span>
          </div>
          <div className={styles.timeFrame}>
            <span className={styles.infoTitle}>M 11:00pm - 12:00pm</span>
            <span className={styles.infoContent}>T 1:00pm - 3:00pm EST</span>
            <span className={styles.infoContent}>1/23/2022 - 4/17/2022</span>
            <span className={styles.infoContent}>12 weeks</span>
          </div>
        </div>
      </div>
      <div className={styles.hr}></div>
      <div className={styles.attendance}>
        <div className={styles.attendanceHead}>
          <div className={styles.weekInfo}>
            <span className={styles.week}>Week 9</span>
            <span className={styles.weekDate}>2/21-2/28</span>
          </div>
          <button className={styles.button}>
            <span className={styles.checkAttendance}>Check Attendance</span>
          </button>
          <span className={styles.daysLeft}>2 days 5 hours left</span>
        </div>
        <div className={styles.checkFrame}>
          <div className={styles.checkRow}>
            <div className={styles.check}>C</div>
            <div className={styles.check}>C</div>
            <div className={styles.check}>C</div>
            <div className={styles.check}>C</div>
          </div>
          <div className={styles.checkRow}>
            <div className={styles.check}>C</div>
            <div className={styles.check}>C</div>
            <div className={styles.check}>C</div>
            <div className={styles.check}>C</div>
          </div>
          <div className={styles.checkRow}>
            <div className={styles.check}>C</div>
            <div className={styles.check}>C</div>
            <div className={styles.check}>C</div>
            <div className={styles.check}>C</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassInformation;
