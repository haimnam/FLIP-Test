import React, { useState } from "react";
import styles from "../../scss/ScheduleAndChat.module.scss";

const PreferredTimes = ({
  partnerInfoData,
  addMeeting,
  removeMeeting,
  timesData,
  changeTimeState,
}) => {
  const [checkList, setCheckList] = useState([
    { id: 1, isChecked: false },
    { id: 2, isChecked: false },
    { id: 3, isChecked: false },
    { id: 4, isChecked: false },
    { id: 5, isChecked: false },
  ]);
  const [checkedItems, setCheckedItems] = useState(new Set());

  const checkHandler = ({ target }) => {
    setCheckList(
      checkList.map((check) =>
        check.id === target.value * 1
          ? { ...check, isChecked: !check.isChecked }
          : check
      )
    );
    checkedItemHandler(
      target.parentNode.parentNode,
      target.value,
      target.checked
    );
  };

  const checkedItemHandler = (box, id, isChecked) => {
    if (isChecked) {
      box.style.backgroundColor = "rgb(248, 243, 233)";
      box.style.border = "2px solid black";
      checkedItems.add(id * 1);
      changeTimeState(id, "FINALIZE");
    } else if (checkedItems.has(id * 1)) {
      box.style.backgroundColor = "white";
      box.style.border = "2px solid white";
      checkedItems.delete(id * 1);
      changeTimeState(id, "Finalize");
    }
    setCheckedItems(checkedItems);
    return checkedItems;
  };

  const timeStateHandler = ({ target }, id, state) => {
    if (state === "FINALIZE") {
      changeTimeState(id, "Undo");
      let newMeeting = {
        id: id * 1,
        main: timesData[0].main,
        sub: timesData[0].sub,
      };
      addMeeting(1, partnerInfoData[0].meetingTimes.concat(newMeeting));
    } else if (state === "Undo") {
      checkedItemHandler(target.parentNode, id, false);
      removeMeeting(id, 1);
      setCheckList(
        checkList.map((check) =>
          check.id === id * 1 ? { ...check, isChecked: false } : check
        )
      );
    }
  };

  return (
    <div className={styles.preferredTimes}>
      <h2>Select your preferred times</h2>
      <div className={styles.timeTable}>
        <div className={styles.tableHead}>
          <div className={styles.overlappingTimes}>Overlapping times</div>
          <div className={styles.partnerPick}>Samuel's pick</div>
          <div className={styles.myPick}>Your pick</div>
        </div>
        <div className={styles.tableBody}>
          {timesData.map((time) => {
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
                      checkList.find((check) => check.id === time.id * 1)
                        .isChecked
                    }
                  ></input>
                  <label />
                </label>
                <div
                  className={
                    time.state === "Finalize"
                      ? styles.state
                      : styles.stateFinalized
                  }
                  onClick={(e) => timeStateHandler(e, time.id, time.state)}
                >
                  {time.state}
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
