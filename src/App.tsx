import React, { useState } from "react";
import styles from "./scss/App.module.scss";
import Sidebar from "./Components/Sidebar/Sidebar.tsx";
import Learning from "./Components/Learning.tsx";
import LanguageContext from "./Store/LanguageContext.tsx";

type StudentsType = {id: number; name: string; language: string; week: string; university: string; localTime: string, timeZone: string, schedule: string};

const App = () => {
  const account = { initial: "NH", name: "Nahee" };
  const [students, setStudents] = useState<StudentsType[]>([
    {
      id: 1,
      name: "Sam",
      language: "Korean - English",
      week: "3/6",
      university: "Seoul National University",
      localTime: "Seoul +17hrs",
      timeZone: "Asia/Seoul",
      schedule: ["Wednesday 11:00pm", "Thursday 4:00am"],
    },
    {
      id: 2,
      name: "Sungmin",
      language: "Korean - English",
      week: "5/8",
      university: "The Cooper Union",
      localTime: "New York +3hrs",
      timeZone: "America/New_York",
      schedule: ["Saturday 9:00am", "Saturday 12:00pm"],
    },
  ]);
  const [recommendation, setRecommendation] = useState({
    title: "College Life",
    contents:
      "한국의 대학생과 직장인 대상으로 한 설문조사에 따르면, 대학 시절을 후회 없이 보내기 위해 해야 할 활동으로 해외여행, 연애와 알바(아르바이트)가 가장 많은 선택을 받았습니다. 이 설문조사에 대해 어떻게 생각하시나요?",
    discussion:
      "서로의 국가간 우선순위의 차이가 있다면 왜 그러한 차이가 있는지 같이 이야기해보세요!",
  });

  return (
    <div className={styles.App}>
      <LanguageContext>
        <Sidebar account={account} />
        <Learning
          account={account}
          students={students}
          recommendation={recommendation}
        />
      </LanguageContext>
    </div>
  );
};

export default App;
