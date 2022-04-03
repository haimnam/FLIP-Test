import React, { useState } from "react";
import styles from "../../../scss/ScheduleAndChat.module.scss";
import dayjs from "dayjs";

const PreferredTimesInsert = ({ addTime }) => {
  const [newDay, setNewDay] = useState<number>(0);
  const [newHour, setNewHour] = useState<number>(0);
  const [newAmpm, setNewAmpm] = useState<string>("am");
  const dayIndex = [1, 2, 3, 4, 5, 6, 0];

  const renderingSetHour = (startIdx: number, endIdx: number) => {
    const result = [];
    for (let i = startIdx; i < endIdx; i++) {
      result.push(
        <button key={i} onClick={() => setNewHour(i)}>
          {i}
        </button>
      );
    }
    return result;
  };

  return (
    <div className={styles.preferredTimesInsert}>
      <div className={styles.daysRow}>
        {dayIndex.map((dayNum, index) => {
          return (
            <button key={index} onClick={() => setNewDay(dayNum)}>
              {dayjs().day(dayNum).format("dd")[0]}
            </button>
          );
        })}
      </div>
      <hr />
      <div className={styles.hoursRow}>{renderingSetHour(0, 7)}</div>
      <div className={styles.hoursRow}>{renderingSetHour(7, 13)}</div>
      <hr />
      <div className={styles.ampmRow}>
        <button onClick={() => setNewAmpm("am")}>am</button>
        <button onClick={() => setNewAmpm("pm")}>pm</button>
      </div>
      <hr />
      <button
        className={styles.addTime}
        onClick={() => addTime(newDay, newHour, newAmpm)}
      >
        + add time
      </button>
    </div>
  );
};

export default PreferredTimesInsert;
