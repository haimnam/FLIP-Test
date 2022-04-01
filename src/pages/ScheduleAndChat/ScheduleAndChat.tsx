import React, { useState } from "react";
import styles from "../../scss/ScheduleAndChat.module.scss";
import ScheduleHead from "./ScheduleHead.tsx";
import Chat from "./Chat/Chat.tsx";
import Schedule from "./Schedule/Schedule.tsx";
import { PartnerInfoData } from "./PartnerInfoData.tsx";
import { useLocation } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

const ScheduleAndChat = () => {
  dayjs.extend(utc);
  dayjs.extend(timezone);

  const location = useLocation();
  const URLSearch = new URLSearchParams(location.search);
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
    setPartnerInfoData(
      partnerInfoData.map((partner) =>
        partner.id === partnerId
          ? {
              ...partner,
              meetingTimes: meeting,
              timesData: partnerInfoData
                .find((partner) => partner.id === partnerId)
                .timesData.map((t) =>
                  t.id === timeId ? { ...t, state: "Undo", print: "Undo" } : t
                ),
            }
          : partner
      )
    );
  };
  const removeMeeting = (meetingId, partnerId) => {
    setPartnerInfoData(
      partnerInfoData.map((partner) =>
        partner.id === partnerId
          ? {
              ...partner,
              meetingTimes: partnerInfoData
                .find((partner) => partner.id === partnerId)
                .meetingTimes.filter((meeting) => meeting.id !== meetingId),
              timesData: partnerInfoData
                .find((partner) => partner.id === partnerId)
                .timesData.map((t) =>
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
    if (state === "FINALIZE") {
      setPartnerInfoData(
        partnerInfoData.map((partner) =>
          partner.id === partnerId
            ? {
                ...partner,
                timesData: partnerInfoData
                  .find((partner) => partner.id === partnerId)
                  .timesData.map((t) =>
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
                timesData: partnerInfoData
                  .find((partner) => partner.id === partnerId)
                  .timesData.map((t) =>
                    t.id === timeId * 1 ? { ...t, isChecked: !t.isChecked } : t
                  ),
              }
            : partner
        )
      );
    }
  };
  const uncheck = (partnerId, timeId) => {
    setPartnerInfoData(
      partnerInfoData.map((partner) =>
        partner.id === partnerId
          ? {
              ...partner,
              timesData: partnerInfoData
                .find((partner) => partner.id === partnerId)
                .timesData.map((t) =>
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
  const addNewTime = (partnerId, newTime) => {
    setPartnerInfoData(
      partnerInfoData.map((partner) =>
        partner.id === partnerId
          ? {
              ...partner,
              timesData: partnerInfoData
                .find((partner) => partner.id === partnerId)
                .timesData.concat(newTime),
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
        <Schedule
          selectedPartner={selectedPartner}
          partnerInfoData={partnerInfoData}
          nowPartner={nowPartner}
          setNowPartner={setNowPartner}
          cityPartner={cityPartner}
          addMeeting={addMeeting}
          removeMeeting={removeMeeting}
          changeTimeState={changeTimeState}
          uncheck={uncheck}
          addNewTime={addNewTime}
        />
      </div>
    </div>
  );
};

export default ScheduleAndChat;
