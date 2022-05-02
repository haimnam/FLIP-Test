import React, { useState } from "react";
import styles from "./PreferredTimes.module.scss";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import advancedFormat from "dayjs/plugin/advancedFormat";
import InfoIcon from "@mui/icons-material/Info";
import { PartnerInfoData } from "../../PartnerInfoData.tsx";

const PreferredTimes = ({
  myInfo,
  meetingTimesData,
  timesData,
  addMeeting,
  removeMeeting,
  changeTimeState,
  uncheck,
  onInsertToggle,
}) => {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.extend(advancedFormat);

  const [checkedItems, setCheckedItems] = useState(new Set());

  const checkHandler = ({ target }) => {
    checkedItemHandler(target.value, target.checked, true);
  };

  const checkedItemHandler = (
    id: number,
    isChecked: boolean,
    isClicked: boolean
  ) => {
    if (isChecked) {
      checkedItems.add(id * 1);
      console.log(timesData);
      if (timesData.find((data) => data.id === id * 1).isPartnerPick) {
        changeTimeState(id, "FINALIZE");
      } else {
        changeTimeState(id, "");
      }
    } else if (checkedItems.has(id * 1)) {
      checkedItems.delete(id * 1);
      if (isClicked) {
        uncheck(id);
      }
    }
    setCheckedItems(checkedItems);
    return checkedItems;
  };

  const timeStateHandler = (id: number, state: string) => {
    if (state === "FINALIZE") {
      const newMeeting = {
        id: id * 1,
        time: timesData.find((time) => time.id === id).time,
      };
      addMeeting(id, meetingTimesData.concat(newMeeting));
    } else if (state === "Undo") {
      removeMeeting(id);
      checkedItemHandler(id, false, false);
    }
  };

  return (
    <div className={styles.preferredTimes}>
      <div className={styles.preferredTimesFrame}>
        <div className={styles.preferredTimesHead}>
          <span className={styles.title}>Meeting Time</span>
          <div className={styles.infoIcon}>
            <InfoIcon />
          </div>
          <AddCircleOutlineIcon
            className={styles.addBtn}
            onClick={onInsertToggle}
          />
        </div>
        <div className={styles.timeTable}>
          {timesData.map((time) => (
            <div
              key={time.id}
              className={time.isChecked ? styles.rowChecked : styles.row}
            >
              <div className={styles.overlappingTimes}>
                <span className={styles.userTime}>
                  {time.time.tz(myInfo.timeZone).format("dddd h:mm a")}
                </span>
                <span className={styles.partnerTime}>
                  {time.time
                    .tz(PartnerInfoData[0].timeZone)
                    .format("dddd h:mm a z")}
                </span>
              </div>
              <div className={styles.partnerPick}>
                <div
                  className={
                    time.isPartnerPick ? styles[PartnerInfoData[0].color] : null
                  }
                >
                  {time.isPartnerPick && PartnerInfoData[0].initial}
                </div>
              </div>
              <div
                className={
                  time.state === "Finalize"
                    ? styles.state
                    : styles.stateFinalized
                }
                onClick={() => timeStateHandler(time.id, time.state)}
              >
                <span className={styles.statePrinted}>{time.print}</span>
              </div>
              <label className={styles.myPick}>
                <input
                  type="checkbox"
                  value={time.id}
                  onChange={(e) => checkHandler(e)}
                  checked={
                    timesData.find((data) => data.id === time.id).isChecked
                  }
                  disabled={time.state === "Undo" ? true : false}
                ></input>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreferredTimes;
