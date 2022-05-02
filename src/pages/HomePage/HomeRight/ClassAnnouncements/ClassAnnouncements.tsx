import React from "react";
import styles from "./ClassAnnouncements.module.scss";

const ClassAnnouncements = () => {
  return (
    <div className={styles.classAnnouncements}>
      <div className={styles.announcementsHead}>
        <span className={styles.title}>Class Announcements</span>
        <div className={styles.classBtn}>
          <span className={styles.seeAll}>See All</span>
        </div>
      </div>
      <div className={styles.announcementsBody}>
        <span className={styles.announcementsContents}>
          Don't forget to take a screenshot during your session for attendance!
          More announcements about sessions will follow.
        </span>
        <div className={styles.footer}>
          <span className={styles.flip}>FLIP</span>
          <span className={styles.announcedDate}>2/28/2022 8:35pm</span>
        </div>
      </div>
    </div>
  );
};

export default ClassAnnouncements;
