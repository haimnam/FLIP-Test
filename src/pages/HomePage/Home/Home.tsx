import React from "react";
import styles from "./Home.module.scss";
import HomeHeader from "../HomeHeader/HomeHeader.tsx";
import Calendar from "../HomeLeft/Calendar/Calendar.tsx";
import UserInfo from "../HomeLeft/UserInfo/UserInfo.tsx";
import Notes from "../HomeLeft/Notes/Notes.tsx";
import ClassInformation from "../HomeRight/ClassInformation/ClassInformation.tsx";
import ClassAnnouncements from "../HomeRight/ClassAnnouncements/ClassAnnouncements.tsx";
import Classmates from "../HomeRight/Classmates/Classmates.tsx";
import FlipNoteContext from "../../../Store/FlipNoteContext.tsx";
import useSWR from "swr";
import { userFetcher } from "../../../Store/UserContext.tsx";

type myInfoType = {
  firstName: string;
  lastName: string;
  _id: string;
  school: string;
  schoolEmail: string;
  isClass: string;
  isMatching: boolean;
};
type fetcherType = {
  msg: string;
  myInfo: myInfoType;
  firstName: string;
  lastName: string;
  id: string;
};

const Home = ({ userLogin }) => {
  const { data: user, error } = useSWR<fetcherType, boolean>(
    "auth/check",
    userFetcher
  );

  if (error) return <div>error</div>;
  else if (!user) return <div>loading...</div>;
  else if (userLogin) {
    return (
      <div className={styles.contents}>
        <FlipNoteContext>
          <HomeHeader myInfo={user.myInfo} />
          <div className={styles.home}>
            <div className={styles.homeLeft}>
              <div className={styles.calendarUser}>
                <Calendar />
                <UserInfo />
              </div>
              <Notes />
            </div>
            <div className={styles.homeRight}>
              <div className={styles.classNotification}>
                <ClassInformation />
                <ClassAnnouncements />
              </div>
              <Classmates />
            </div>
          </div>
        </FlipNoteContext>
      </div>
    );
  } else {
    return <div>You do not have access.</div>;
  }
};

export default Home;
