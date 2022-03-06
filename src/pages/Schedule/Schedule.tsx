import React, { useState } from "react";
import styles from "../../scss/ScheduleAndChat.module.scss";
import ScheduleHead from "./ScheduleHead.tsx";
import Chat from "./Chat.tsx";
import Timezone from "./Timezone.tsx";
import PreferredTimes from "./PreferredTimes.tsx";
import { PartnerInfoData } from "./PartnerInfoData.tsx";
import { TimesData } from "./TimesData.tsx";

const Schedule = () => {
  const [partnerInfoData, setPartnerInfoData] = useState(PartnerInfoData);
  const [timesData, setTimesData] = useState(TimesData);

  const addMeeting = (partnerId, meeting) => {
    setPartnerInfoData(
      partnerInfoData.map((partner) =>
        partner.id == partnerId
          ? { ...partner, meetingTimes: meeting }
          : partner
      )
    );
  };

  const removeMeeting = (meetingId, partnerId) => {
    let meeting = partnerInfoData[0].meetingTimes.filter(
      (meeting) => meeting.id != meetingId
    );
    setPartnerInfoData(
      partnerInfoData.map((partner) =>
        partner.id == partnerId
          ? { ...partner, meetingTimes: meeting }
          : partner
      )
    );
  };

  const changeTimeState = (id, state) => {
    setTimesData(
      timesData.map((time) =>
        time.id == id ? { ...time, state: state } : time
      )
    );
  };

  return (
    <div className={styles.scheduleAndChat}>
      <ScheduleHead />
      <div className={styles.scheduleAndChatBody}>
        <Chat partnerInfoData={partnerInfoData} />
        <div className={styles.scheduleBody}>
          <Timezone />
          <PreferredTimes
            partnerInfoData={partnerInfoData}
            addMeeting={addMeeting}
            removeMeeting={removeMeeting}
            timesData={timesData}
            changeTimeState={changeTimeState}
          />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
