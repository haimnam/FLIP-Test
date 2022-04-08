import React, { useState } from "react";
import styles from "../../../scss/Learning.module.scss";

type RecommendationType = {
  title: string;
  contents: string;
  discussion: string;
};

const Recommendation = () => {
  const [recommendation, setRecommendation] = useState<RecommendationType>({
    title: "College Life",
    contents:
      "한국의 대학생과 직장인 대상으로 한 설문조사에 따르면, 대학 시절을 후회 없이 보내기 위해 해야 할 활동으로 해외여행, 연애와 알바(아르바이트)가 가장 많은 선택을 받았습니다. 이 설문조사에 대해 어떻게 생각하시나요?",
    discussion:
      "서로의 국가간 우선순위의 차이가 있다면 왜 그러한 차이가 있는지 같이 이야기해보세요!",
  });

  return (
    <div className={styles.recommendation}>
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
