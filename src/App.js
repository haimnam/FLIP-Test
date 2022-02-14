import React, { useState } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Learning from "./Components/Learning";

const App = () => {
  const account = { initial: "NH", name: "Nahee" };
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Sam",
      daysLeft: 2,
      language: "Korean - English",
      week: "3/6",
      university: "Seoul National University",
      localTime: "Seoul +17hrs",
      schedule: ["Wednesday 11:00pm", "Thursday 4:00am"],
    },
    {
      id: 2,
      name: "Sungmin",
      daysLeft: 5,
      language: "Korean - English",
      week: "5/8",
      university: "The Cooper Union",
      localTime: "New York +3hrs",
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
    <div className="App">
      <Sidebar account={account} />
      <Learning
        account={account}
        students={students}
        recommendation={recommendation}
      />
    </div>
  );
};

export default App;
