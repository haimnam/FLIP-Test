import React from "react";
import styles from "./Learning.module.scss";
import LearningHeader from "../LearningLeft/LearningHeader/LearningHeader.tsx";
import Calendar from "../LearningLeft/Calendar/Calendar.tsx";
import UserInfo from "../LearningLeft/UserInfo/UserInfo.tsx";
import ClassInformation from "../LearningRight/ClassInformation/ClassInformation.tsx";
import ClassAnnouncements from "../LearningRight/ClassAnnouncements/ClassAnnouncements.tsx";
import Classmates from "../LearningRight/Classmates/Classmates.tsx";
import FlipNoteContext from "../../../Store/FlipNoteContext.tsx";

const Learning = ({ myInfo }) => {
  return (
    <div className={styles.contents}>
      <FlipNoteContext>
        <LearningHeader myInfo={myInfo} />
        <div className={styles.learning}>
          <div className={styles.learningLeft}>
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
          <div className={styles.learningRight}>
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
};

export default Learning;
