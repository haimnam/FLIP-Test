import React, { useState } from "react";
import styles from "./ClassAnnouncements.module.scss";

const ClassAnnouncements = () => {
  const [recommendation, setRecommendation] = useState<RecommendationType>({
    title: "College Life",
    contents:
      "한국의 대학생과 직장인 대상으로 한 설문조사에 따르면, 대학 시절을 후회 없이 보내기 위해 해야 할 활동으로 해외여행, 연애와 알바(아르바이트)가 가장 많은 선택을 받았습니다. 이 설문조사에 대해 어떻게 생각하시나요?",
    discussion:
      "서로의 국가간 우선순위의 차이가 있다면 왜 그러한 차이가 있는지 같이 이야기해보세요!",
  });

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
