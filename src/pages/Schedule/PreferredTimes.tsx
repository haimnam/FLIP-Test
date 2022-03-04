import React, { useState } from "react";
import styles from "../../scss/ScheduleAndChat.module.scss";

const PreferredTimes = () => {
  const [timesData, setTimesData] = useState([
    {
      id: 1,
      main: "Tuesday 3:00 pm",
      sub: "Wednesday 5:00 am KST",
      isPartnerPick: false,
      myPick: "sq",
      state: "Finalize",
    },
    {
      id: 2,
      main: "Tuesday 3:00 pm",
      sub: "Wednesday 5:00 am KST",
      isPartnerPick: true,
      myPick: "sq",
      state: "Finalize",
    },
    {
      id: 3,
      main: "Tuesday 3:00 pm",
      sub: "Wednesday 5:00 am KST",
      isPartnerPick: true,
      myPick: "sq",
      state: "Finalize",
    },
    {
      id: 4,
      main: "Tuesday 3:00 pm",
      sub: "Wednesday 5:00 am KST",
      isPartnerPick: true,
      myPick: "sq",
      state: "Finalize",
    },
    {
      id: 5,
      main: "Tuesday 3:00 pm",
      sub: "Wednesday 5:00 am KST",
      isPartnerPick: true,
      myPick: "sq",
      state: "Finalize",
    },
  ]);

  const [isChecked, setIsChecked] = useState(false);
  const [checkedItems, setCheckedItems] = useState(new Set());

  const checkHandler = ({ target }) => {
    setIsChecked(!isChecked);
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
      checkedItems.add(id);
      setTimesData(
        timesData.map((time) =>
          time.id == id ? { ...time, state: "Undo" } : time
        )
      );
    } else if (checkedItems.has(id)) {
      box.style.backgroundColor = "white";
      box.style.border = "2px solid white";
      checkedItems.delete(id);
      setTimesData(
        timesData.map((time) =>
          time.id == id ? { ...time, state: "Finalize" } : time
        )
      );
    }
    setCheckedItems(checkedItems);
    return checkedItems;
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
                  ></input>
                </label>
                <div className={styles.state}>{time.state}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PreferredTimes;
