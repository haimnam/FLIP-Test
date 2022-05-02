import React from "react";
import styles from "./Classmates.module.scss";

const Classmates = () => {
  return (
    <div className={styles.classmates}>
      <div className={styles.classmatesFrame}>
        <div className={styles.classmatesHead}>
          <span className={styles.title}>Classmates</span>
          <span className={styles.number}>
            <span className={styles.blue}>12</span>/22
          </span>
        </div>
        <div className={styles.classmatesBody}>
          {[...Array(9)].map(() => (
            <div className={styles.classmate}>
              <div className={styles.icon}>
                <span className={styles.initial}>SJ</span>
              </div>
              <div className={styles.classmateInfo}>
                <span className={styles.name}>Annabelle</span>
                <span className={styles.lang}>
                  native <span className={styles.bold}>KOR</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classmates;
