import React, { useState } from "react";
import useSWR from "swr";
import { userFetcher } from "../../../Store/UserContext.tsx";
import styles from "./ScheduleAndChat.module.scss";
import Chat from "../Chat/Chat.tsx";
import Schedule from "../Schedule/Schedule/Schedule.tsx";
import { MeetingTimesData } from "../MeetingTimesData.tsx";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

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

const ScheduleAndChat = ({ userLogin, myInfo }) => {
  dayjs.extend(utc);
  dayjs.extend(timezone);

  const [meetingTimesData, setMeetingTimesData] = useState(MeetingTimesData);

  const { data: user, error } = useSWR<fetcherType, boolean>(
    "auth/check",
    userFetcher
  );

  if (error) return <div>error</div>;
  else if (!user) return <div>loading...</div>;
  else if (userLogin) {
    return (
      <div className={styles.scheduleAndChat}>
        <span className={styles.scheduleAndChatHead}>
          Schedule And Chat with your Partners
        </span>
        <div className={styles.scheduleAndChatBody}>
          <Chat meetingTimesData={meetingTimesData} />
          <Schedule
            myInfo={myInfo}
            meetingTimesData={meetingTimesData}
            setMeetingTimesData={setMeetingTimesData}
          />
        </div>
      </div>
    );
  } else {
    return <div>You do not have access.</div>;
  }
};

export default ScheduleAndChat;
