import React from "react";
import styles from "./Home.module.scss";
import HomeHeader from "../HomeHeader/HomeHeader.tsx";
import Calendar from "../HomeLeft/Calendar/Calendar.tsx";
import UserInfo from "../HomeLeft/UserInfo/UserInfo.tsx";
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
              <div className={styles.notes}>
                <div className={styles.notesHead}>
                  <span className={styles.title}>
                    Notes from other classmates
                  </span>
                  <span className={styles.native}>native language</span>
                  <div className={styles.selected}>
                    <span className={styles.selectedLang}>KOR</span>
                  </div>
                  <span className={styles.lang}>ENG</span>
                </div>
                <div className={styles.note}>
                  <div className={styles.noteHead}>
                    <div className={styles.noteHeadFrame}>
                      <div className={styles.icons}>
                        <div className={styles.icon}>
                          <span className={styles.initial}>S</span>
                        </div>
                        <div className={styles.icon}>
                          <span className={styles.initial}>N</span>
                        </div>
                      </div>
                      <span className={styles.uploadDate}>3 days ago</span>
                    </div>
                    <div className={styles.noteRightFrame}>
                      <span className={styles.uploadNum}>10</span>
                      <div className={styles.iconFrame}>
                        <span className={styles.uploadIcon}>i</span>
                      </div>
                    </div>
                  </div>
                  <span className={styles.word}>looking forward to it</span>
                </div>
                <div className={styles.note}>
                  <div className={styles.noteHead}>
                    <div className={styles.noteHeadFrame}>
                      <div className={styles.icons}>
                        <div className={styles.icon}>
                          <span className={styles.initial}>S</span>
                        </div>
                        <div className={styles.icon}>
                          <span className={styles.initial}>N</span>
                        </div>
                      </div>
                      <span className={styles.uploadDate}>3 days ago</span>
                    </div>
                    <div className={styles.noteRightFrame}>
                      <span className={styles.uploadNum}>10</span>
                      <div className={styles.iconFrame}>
                        <span className={styles.uploadIcon}>i</span>
                      </div>
                    </div>
                  </div>
                  <span className={styles.word}>looking forward to it</span>
                </div>
              </div>
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
