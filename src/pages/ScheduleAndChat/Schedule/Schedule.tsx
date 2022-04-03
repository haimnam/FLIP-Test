import React, { useState } from "react";
import styles from "../../../scss/ScheduleAndChat.module.scss";
import Timezone from "./Timezone.tsx";
import PreferredTimes from "./PreferredTimes.tsx";
import PreferredTimesInsert from "./PreferredTimesInsert.tsx";
import dayjs from "dayjs";

const Schedule = ({
  selectedPartner,
  partnerInfoData,
  nowPartner,
  setNowPartner,
  cityPartner,
  addMeeting,
  removeMeeting,
  changeTimeState,
  uncheck,
  addNewTime,
}) => {
  const [insertToggle, setInsertToggle] = useState<boolean>(false);
  const onInsertToggle = () => {
    setInsertToggle((prev) => !prev);
  };

  const [nextId, setNextId] = useState<number>(4);
  const addTime = (day: number, hour: number, ampm: string) => {
    if (ampm === "pm") {
      hour += 12;
    }
    let newTime = {
      id: nextId,
      time: dayjs()
        .tz("America/New_York")
        .set("day", day)
        .set("hour", hour)
        .set("minute", 0),
      isPartnerPick: false,
      isChecked: false,
      state: "Finalize",
      print: "Finalize",
    };
    setNextId(nextId + 1);
    addNewTime(selectedPartner, newTime);
  };

  return (
    <div className={styles.scheduleBody}>
      <Timezone
        selectedPartner={selectedPartner}
        nowPartner={nowPartner}
        setNowPartner={setNowPartner}
        cityPartner={cityPartner}
      />
      <PreferredTimes
        selectedPartner={selectedPartner}
        partnerInfoData={partnerInfoData}
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
