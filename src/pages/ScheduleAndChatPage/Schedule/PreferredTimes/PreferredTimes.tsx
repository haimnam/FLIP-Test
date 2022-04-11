import React, { useState } from "react";
import styles from "./PreferredTimes.module.scss";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { AccountData } from "../../AccountData.tsx";

const PreferredTimes = ({
  myInfo,
  selectedPartner,
  partnerInfoData,
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
      if (
        partnerInfoData
          .find((partner) => partner.id === selectedPartner)
          .timesData.find((data) => data.id === id * 1).isPartnerPick
      ) {
        changeTimeState(id, selectedPartner, "FINALIZE");
      } else {
        changeTimeState(id, selectedPartner, "");
      }
    } else if (checkedItems.has(id * 1)) {
      checkedItems.delete(id * 1);
      if (isClicked) {
        uncheck(selectedPartner, id);
      }
    }
    setCheckedItems(checkedItems);
    return checkedItems;
  };

  const timeStateHandler = (id: number, state: string) => {
    if (state === "FINALIZE") {
      const newMeeting = {
        id: id * 1,
        time: partnerInfoData
          .find((partner) => partner.id === selectedPartner)
          .timesData.find((time) => time.id === id).time,
      };
      addMeeting(
        id,
        selectedPartner,
        partnerInfoData
          .find((partner) => partner.id === selectedPartner)
          .meetingTimes.concat(newMeeting)
      );
    } else if (state === "Undo") {
      removeMeeting(id, selectedPartner);
      checkedItemHandler(id, false, false);
    }
  };

  return (
    <div className={styles.preferredTimes}>
      <div className={styles.preferredTimesHead}>
        <h2>Select your preferred times</h2>
        <AddCircleOutlineIcon
          className={styles.addBtn}
          onClick={onInsertToggle}
        />
      </div>
      <div className={styles.timeTable}>
        <div className={styles.tableHead}>
          <div className={styles.overlappingTimes}>Overlapping times</div>
          <div className={styles.partnerPick}>Samuel's pick</div>
          <div className={styles.myPick}>Your pick</div>
        </div>
        <div className={styles.tableBody}>
          {partnerInfoData
            .find((partner) => partner.id === selectedPartner)
            .timesData.map((time) => (
              <div
                key={time.id}
                className={time.isChecked ? styles.rowChecked : styles.row}
              >
                <div className={styles.overlappingTimes}>
                  <h3>{time.time.tz(myInfo.timeZone).format("dddd h:mm a")}</h3>
                  <div>
                    {time.time
                      .tz(
                        partnerInfoData.find(
                          (partner) => partner.id === selectedPartner
                        ).timeZone
                      )
                      .format("dddd h:mm a z")}
                  </div>
                </div>
                <div className={styles.partnerPick}>
                  <div
                    className={
                      time.isPartnerPick
                        ? styles[
                            AccountData.find(
                              (acc) => acc.id === selectedPartner
                            ).color
                          ]
                        : ""
                    }
                  >
                    {time.isPartnerPick &&
                      AccountData.find((acc) => acc.id === selectedPartner)
                        .initial}
                  </div>
                </div>
                <label className={styles.myPick}>
                  <input
                    type="checkbox"
                    value={time.id}
                    onChange={(e) => checkHandler(e)}
                    checked={
                      partnerInfoData
                        .find((partner) => partner.id === selectedPartner)
                        .timesData.find((data) => data.id === time.id).isChecked
                    }
                    disabled={time.state === "Undo" ? true : false}
                  ></input>
                </label>
                <div
                  className={
                    time.state === "Finalize"
                      ? styles.state
                      : styles.stateFinalized
                  }
                  onClick={() => timeStateHandler(time.id, time.state)}
                >
                  {time.print}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PreferredTimes;
