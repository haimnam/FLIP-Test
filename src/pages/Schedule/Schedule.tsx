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
  const [selectedPartner, setSelectedPartner] = useState(1);

  const addMeeting = (partnerId, meeting) => {
    setPartnerInfoData(
      partnerInfoData.map((partner) =>
        partner.id === partnerId
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
        partner.id === partnerId
          ? { ...partner, meetingTimes: meeting }
          : partner
      )
    );
  };

  const changeTimeState = (id, state) => {
    if (state === "FINALIZE" || state === "Finalize") {
      setTimesData(
        timesData.map((t) =>
          t.id === id * 1
            ? { ...t, isChecked: !t.isChecked, state: state, print: "Finalize" }
            : t
        )
      );
    } else if (state === "Undo") {
      setTimesData(
        timesData.map((t) =>
          t.id === id ? { ...t, state: state, print: state } : t
        )
      );
    } else {
      setTimesData(
        timesData.map((t) =>
          t.id === id * 1 ? { ...t, isChecked: !t.isChecked } : t
        )
      );
    }
  };

  return (
    <div className={styles.scheduleAndChat}>
      <ScheduleHead selectedPartner={selectedPartner} />
      <div className={styles.scheduleAndChatBody}>
        <Chat
          selectedPartner={selectedPartner}
          partnerInfoData={partnerInfoData}
        />
        <div className={styles.scheduleBody}>
          <Timezone selectedPartner={selectedPartner} />
          <PreferredTimes
            selectedPartner={selectedPartner}
            partnerInfoData={partnerInfoData}
            addMeeting={addMeeting}
            removeMeeting={removeMeeting}
            timesData={timesData}
            setTimesData={setTimesData}
            changeTimeState={changeTimeState}
          />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
