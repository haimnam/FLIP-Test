import React, { useState } from "react";
import styles from "./Schedule.module.scss";
import Timezone from "../Timezone/Timezone.tsx";
import PreferredTimes from "../PreferredTimes/PreferredTimes.tsx";
import PreferredTimesInsert from "../PreferredTimesInsert/PreferredTimesInsert.tsx";
import dayjs from "dayjs";
import { MeetingTimesType, TimesType } from "../PartnerInfoData.tsx";
import { TimesData } from "../../TimesData.tsx";

const Schedule = ({ myInfo, meetingTimesData, setMeetingTimesData }) => {
  const [timesData, setTimesData] = useState(TimesData);

  const addMeeting = (timeId: number, meeting: MeetingTimesType[]) => {
    setMeetingTimesData(meeting);
    setTimesData(
      timesData.map((time) =>
        time.id === timeId * 1
          ? {
              ...time,
              state: "Undo",
              print: "Undo",
            }
          : time
      )
    );
  };
  const removeMeeting = (meetingId: number) => {
    setMeetingTimesData(
      meetingTimesData.filter((meeting) => meeting.id !== meetingId)
    );
    setTimesData(
      timesData.map((time) =>
        time.id === meetingId * 1
          ? {
              ...time,
              isChecked: !time.isChecked,
              state: "Finalize",
              print: "Finalize",
            }
          : time
      )
    );
  };
  const changeTimeState = (timeId: number, state: string) => {
    if (state === "FINALIZE") {
      setTimesData(
        timesData.map((time) =>
          time.id === timeId * 1
            ? {
                ...time,
                isChecked: !time.isChecked,
                state: state,
                print: "Finalize",
              }
            : time
        )
      );
    } else {
      setTimesData(
        timesData.map((time) =>
          time.id === timeId * 1
            ? {
                ...time,
                isChecked: !time.isChecked,
              }
            : time
        )
      );
    }
  };
  const uncheck = (timeId: number) => {
    setTimesData(
      timesData.map((time) =>
        time.id === timeId * 1
          ? {
              ...time,
              isChecked: !time.isChecked,
              state: "Finalize",
              print: "Finalize",
            }
          : time
      )
    );
  };
  const addNewTime = (newTime: TimesType) => {
    setTimesData(timesData.concat(newTime));
  };

  const [insertToggle, setInsertToggle] = useState<boolean>(false);
  const onInsertToggle = () => {
    setInsertToggle((prev) => !prev);
  };

  const [nextId, setNextId] = useState<number>(4);
  const addTime = (day: number, hour: number, ampm: string) => {
    if (ampm === "pm") {
      hour += 12;
    }
    const newTime = {
      id: nextId,
      time: dayjs()
        .tz(myInfo[0].timeZone)
        .set("day", day)
        .set("hour", hour)
        .set("minute", 0),
      isPartnerPick: false,
      isChecked: false,
      state: "Finalize",
      print: "Finalize",
    };
    setNextId(nextId + 1);
    addNewTime(newTime);
  };

  return (
    <div className={styles.scheduleBody}>
      <Timezone myInfo={myInfo} />
      <PreferredTimes
        myInfo={myInfo}
        meetingTimesData={meetingTimesData}
        timesData={timesData}
        addMeeting={addMeeting}
        removeMeeting={removeMeeting}
        changeTimeState={changeTimeState}
        uncheck={uncheck}
        onInsertToggle={onInsertToggle}
      />
      {insertToggle && <PreferredTimesInsert addTime={addTime} />}
    </div>
  );
};

export default Schedule;
