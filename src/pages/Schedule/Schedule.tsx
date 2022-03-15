import React, { useState } from "react";
import styles from "../../scss/ScheduleAndChat.module.scss";
import ScheduleHead from "./ScheduleHead.tsx";
import Chat from "./Chat.tsx";
import Timezone from "./Timezone.tsx";
import PreferredTimes from "./PreferredTimes.tsx";
import { PartnerInfoData } from "./PartnerInfoData.tsx";
import { useLocation } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

const Schedule = () => {
  const location = useLocation();
  const URLSearch = new URLSearchParams(location.search);

  dayjs.extend(utc);
  dayjs.extend(timezone);
  const [nowPartner, setNowPartner] = useState(dayjs());
  const [cityPartner, setCityPartner] = useState("Seoul +14hrs");

  const selectAccount = (id) => {
    setSelectedPartner(id);
    URLSearch.set("id", id);
    if (id === 1) {
      setNowPartner(dayjs());
      setCityPartner("Seoul +14hrs");
    } else {
      setNowPartner(dayjs().tz("America/New_York"));
      setCityPartner("New York");
    }
  };

  const [partnerInfoData, setPartnerInfoData] = useState(PartnerInfoData);
  const [selectedPartner, setSelectedPartner] = useState(1);

  const addMeeting = (timeId, partnerId, meeting) => {
    const currentPartner = partnerInfoData.find(
      (partner) => partner.id === partnerId
    );
    setPartnerInfoData(
      partnerInfoData.map((partner) =>
        partner.id === partnerId
          ? {
              ...partner,
              meetingTimes: meeting,
              timesData: currentPartner.timesData.map((t) =>
                t.id === timeId ? { ...t, state: "Undo", print: "Undo" } : t
              ),
            }
          : partner
      )
    );
  };

  const removeMeeting = (meetingId, partnerId) => {
    const currentPartner = partnerInfoData.find(
      (partner) => partner.id === partnerId
    );
    let meeting = currentPartner.meetingTimes.filter(
      (meeting) => meeting.id !== meetingId
    );
    setPartnerInfoData(
      partnerInfoData.map((partner) =>
        partner.id === partnerId
          ? {
              ...partner,
              meetingTimes: meeting,
              timesData: currentPartner.timesData.map((t) =>
                t.id === meetingId * 1
                  ? {
                      ...t,
                      isChecked: !t.isChecked,
                      state: "Finalize",
                      print: "Finalize",
                    }
                  : t
              ),
            }
          : partner
      )
    );
  };

  const changeTimeState = (timeId, partnerId, state) => {
    const currentPartner = partnerInfoData.find(
      (partner) => partner.id === partnerId
    );
    if (state === "FINALIZE") {
      setPartnerInfoData(
        partnerInfoData.map((partner) =>
          partner.id === partnerId
            ? {
                ...partner,
                timesData: currentPartner.timesData.map((t) =>
                  t.id === timeId * 1
                    ? {
                        ...t,
                        isChecked: !t.isChecked,
                        state: state,
                        print: "Finalize",
                      }
                    : t
                ),
              }
            : partner
        )
      );
    } else {
      setPartnerInfoData(
        partnerInfoData.map((partner) =>
          partner.id === partnerId
            ? {
                ...partner,
                timesData: currentPartner.timesData.map((t) =>
                  t.id === timeId * 1 ? { ...t, isChecked: !t.isChecked } : t
                ),
              }
            : partner
        )
      );
    }
  };

  const addNewTime = (partnerId, newTime) => {
    const currentPartner = partnerInfoData.find(
      (partner) => partner.id === partnerId
    );
    setPartnerInfoData(
      partnerInfoData.map((partner) =>
        partner.id === partnerId
          ? {
              ...partner,
              timesData: currentPartner.timesData.concat(newTime),
            }
          : partner
      )
    );
  };

  const uncheck = (partnerId, timeId) => {
    const currentPartner = partnerInfoData.find(
      (partner) => partner.id === partnerId
    );
    setPartnerInfoData(
      partnerInfoData.map((partner) =>
        partner.id === partnerId
          ? {
              ...partner,
              timesData: currentPartner.timesData.map((t) =>
                t.id === timeId * 1
                  ? {
                      ...t,
                      isChecked: !t.isChecked,
                      state: "Finalize",
                      print: "Finalize",
                    }
                  : t
              ),
            }
          : partner
      )
    );
  };

  return (
    <div className={styles.scheduleAndChat}>
      <ScheduleHead selectAccount={selectAccount} />
      <div className={styles.scheduleAndChatBody}>
        <Chat
          selectedPartner={selectedPartner}
          partnerInfoData={partnerInfoData}
        />
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
            addNewTime={addNewTime}
            uncheck={uncheck}
          />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
