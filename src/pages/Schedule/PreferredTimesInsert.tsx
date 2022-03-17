import React, { useState } from "react";
import styles from "../../scss/ScheduleAndChat.module.scss";

const PreferredTimesInsert = ({ addTime }) => {
  const [newDay, setNewDay] = useState(0);
  const [newHour, setNewHour] = useState(0);
  const [newAmpm, setNewAmpm] = useState("am");

  const setDay = (day) => {
    setNewDay(day);
  };

  const setHour = (hour) => {
    setNewHour(hour);
  };

  const setAmpm = (ampm) => {
    setNewAmpm(ampm);
  };

  return (
    <div className={styles.preferredTimesInsert}>
      <div className={styles.daysRow}>
        <button onClick={() => setDay(1)}>M</button>
        <button onClick={() => setDay(2)}>T</button>
        <button onClick={() => setDay(3)}>W</button>
        <button onClick={() => setDay(4)}>T</button>
        <button onClick={() => setDay(5)}>F</button>
        <button onClick={() => setDay(6)}>S</button>
        <button onClick={() => setDay(0)}>S</button>
      </div>
      <hr></hr>
      <div className={styles.hoursRow}>
        <button onClick={() => setHour(0)}>0</button>
        <button onClick={() => setHour(1)}>1</button>
        <button onClick={() => setHour(2)}>2</button>
        <button onClick={() => setHour(3)}>3</button>
        <button onClick={() => setHour(4)}>4</button>
        <button onClick={() => setHour(5)}>5</button>
        <button onClick={() => setHour(6)}>6</button>
      </div>
      <div className={styles.hoursRow}>
        <button onClick={() => setHour(7)}>7</button>
        <button onClick={() => setHour(8)}>8</button>
        <button onClick={() => setHour(9)}>9</button>
        <button onClick={() => setHour(10)}>10</button>
        <button onClick={() => setHour(11)}>11</button>
        <button onClick={() => setHour(12)}>12</button>
      </div>
      <hr></hr>
      <div className={styles.ampmRow}>
        <button onClick={() => setAmpm("am")}>am</button>
        <button onClick={() => setAmpm("pm")}>pm</button>
      </div>
      <hr></hr>
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
