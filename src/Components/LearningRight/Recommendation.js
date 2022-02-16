import React from "react";
import styles from "../../scss/Learning.module.scss";

const Recommendation = ({ recommendation }) => {
  return (
    <div>
      <h3>
        This Week's Recommendation
        <span className={styles.collegeLife}>{recommendation.title}</span>
      </h3>
      <div className={styles.recommendationContents}>
        <p>{recommendation.contents}</p>
        <p className={styles.greyContents}>{recommendation.discussion}</p>
      </div>
      <div className={styles.goToDiscussion}>
        Go to this week's discussion topic
      </div>
    </div>
  );
};

export default Recommendation;
