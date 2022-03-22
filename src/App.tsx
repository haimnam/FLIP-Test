import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import styles from "./scss/App.module.scss";
import Sidebar from "./Components/Sidebar.tsx";
import LanguageContext from "./Store/LanguageContext.tsx";
import { AuthContext } from "./Store/AuthProvider.tsx";

type StudentsType = {
  id: number;
  name: string;
  language: string;
  week: string;
  university: string;
  localTime: string;
  timeZone: string;
  schedule: string[];
};

const App = () => {
  const [authTokens, setAuthTokens] = useState(
    localStorage.getItem("access_token") || ""
  );
  const setTokens = (data) => {
    localStorage.setItem("access_token", JSON.stringify(data));
    setAuthTokens(data);
  };
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

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <BrowserRouter>
        <div className={styles.App}>
          <LanguageContext>
            <Sidebar account={account} students={students} />
          </LanguageContext>
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
