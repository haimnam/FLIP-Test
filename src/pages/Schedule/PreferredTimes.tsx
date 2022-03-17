import React, { useState } from "react";
import styles from "../../scss/ScheduleAndChat.module.scss";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const PreferredTimes = ({
  selectedPartner,
  partnerInfoData,
  addMeeting,
  removeMeeting,
  changeTimeState,
  addNewTime,
  uncheck,
  onInsertToggle,
}) => {
  const [checkedItems, setCheckedItems] = useState(new Set());

  const checkHandler = ({ target }) => {
    checkedItemHandler(
      target.parentNode.parentNode,
      target.value,
      target.checked,
      true
    );
  };

  const checkedItemHandler = (box, id, isChecked, isClicked) => {
    if (isChecked) {
      box.style.backgroundColor = "rgb(248, 243, 233)";
      box.style.border = "2px solid black";
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
      box.style.backgroundColor = "white";
      box.style.border = "2px solid white";
      checkedItems.delete(id * 1);
      if (isClicked) {
        uncheck(selectedPartner, id);
      }
    }
    setCheckedItems(checkedItems);
    return checkedItems;
  };

  const timeStateHandler = ({ target }, id, state) => {
    if (state === "FINALIZE") {
      let newMeeting = {
        id: id * 1,
        main: partnerInfoData
          .find((partner) => partner.id === selectedPartner)
          .timesData.find((time) => time.id === id).main,
        sub: partnerInfoData
          .find((partner) => partner.id === selectedPartner)
          .timesData.find((time) => time.id === id).sub,
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
      checkedItemHandler(target.parentNode, id, false, false);
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
            .timesData.map((time) => {
              return (
                <div key={time.id} className={styles.row}>
                  <div className={styles.overlappingTimes}>
                    <h3>{time.main}</h3>
                    <div>{time.sub}</div>
                  </div>
                  <div className={styles.partnerPick}>
                    <div className={time.isPartnerPick ? styles.circle : ""}>
                      {time.isPartnerPick ? "SJ" : ""}
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
                          .timesData.find((data) => data.id === time.id)
                          .isChecked
                      }
                    ></input>
                  </label>
                  <div
                    className={
                      time.state === "Finalize"
                        ? styles.state
                        : styles.stateFinalized
                    }
                    onClick={(e) => timeStateHandler(e, time.id, time.state)}
                  >
                    {time.print}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default PreferredTimes;
