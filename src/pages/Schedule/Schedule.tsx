import React from "react";
import styles from "../../scss/ScheduleAndChat.module.scss";
import { AccountData } from "./AccountData.tsx";

const Schedule = () => {
  return (
    <div className={styles.scheduleAndChat}>
      <div className={styles.scheduleAndChatHead}>
        <h1>Schedule And Chat</h1>
        {AccountData.map((account) => {
          return (
            <div key={account.id} className={styles.circle}>
              <span className={"styles." + account.color}>
                {account.initial}
              </span>
            </div>
          );
        })}
      </div>

      <div className={styles.scheduleAndChatBody}>
        <div className={styles.chatBody}>
          <div className={styles.chatInfo}>
            <div className={styles.partnerInfo}>
              <div className={styles.partnerMain}>
                <h3>Samuel Jeong</h3>
                <div>Seoul +14hrs 4:20pm</div>
              </div>
              <div className={styles.partnerSub}>
                <div>Korean</div>
                <div>sammy98@snu.ac.kr</div>
              </div>
              <div className={styles.partnerUniv}>
                <div>Seoul National University</div>
                <div>German Education</div>
              </div>
              <div className={styles.partnerTaste}>
                <div className={styles.partnerTasteItem}>reading</div>
                <div className={styles.partnerTasteItem}>for</div>
                <div className={styles.partnerTasteItem}>fun</div>
                <div className={styles.partnerTasteItemLighter}>interests</div>
                <div className={styles.partnerTasteItemLighter}>are</div>
                <div className={styles.partnerTasteItem}>various</div>
                <div className={styles.partnerTasteItem}>are</div>
                <div className={styles.partnerTasteItemLighter}>various</div>
                <div className={styles.partnerTasteItem}>fields</div>
              </div>
            </div>
            <div className={styles.regularMeeting}>
              <div>Regular meetings on</div>
              <div className={styles.meetingContainer}>
                <div className={styles.meetingItem}>
                  <div>
                    <h3>Tuesday 3:00 pm</h3>
                  </div>
                  <div>Wednesday 5:00 am KST</div>
                </div>
                <div className={styles.meetingItem}>
                  <div>
                    <h3>Tuesday 3:00 pm</h3>
                  </div>
                  <div>Wednesday 5:00 am KST</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.chatScreen}>
            <div className={styles.chatContainer}>
              <div className={styles.chatItem}>
                <div className={styles.chatBox}>
                  <div className={styles.chatMessage}>
                    hello! how are you doing?
                  </div>
                </div>
              </div>

              <div className={styles.chatItem}>
                <div className={styles.chatBox}>
                  <div className={styles.chatMessage}>
                    it is really nice to meet you!
                  </div>
                </div>
              </div>

              <div className={styles.chatItem}>
                <div className={styles.chatBox}>
                  <div className={styles.chatMessage}>
                    im looking forward to meeting you soon!!
                  </div>
                </div>
              </div>

              <div className={styles.chatMyItem}>
                <div className={styles.chatBox}>
                  <div className={styles.chatMessage}>
                    im good, its nice to meet you!
                  </div>
                </div>
              </div>

              <div className={styles.chatMyItem}>
                <div className={styles.chatBox}>
                  <div className={styles.chatMessage}>
                    when would you like to meet for our first session?
                  </div>
                  <div className={styles.chatTime}>12/26 3:00 pm</div>
                </div>
              </div>
            </div>

            <div className={styles.chatInput}>
              <input type="text" placeholder="write message..."></input>
            </div>
          </div>
        </div>

        <div className={styles.scheduleBody}>
          <div className={styles.timezone}>
            <h2>Timezone converter</h2>
            <div className={styles.converterContainer}>
              <div className={styles.converterItemColored}>
                <div className={styles.city}>
                  <div className={styles.cityName}>New York</div>
                  <div className={styles.now}>now</div>
                </div>
                <div className={styles.time}>
                  <div>3</div>
                  <div>30</div>
                  <div className={styles.ampm}>am</div>
                </div>
                <div className={styles.date}>
                  <div>12</div>
                  <div>/</div>
                  <div>28</div>
                  <div className={styles.day}>Tuesday</div>
                </div>
              </div>
              <div className={styles.converterItem}>
                <div className={styles.city}>
                  <div className={styles.cityName}>Seoul +14hrs</div>
                </div>
                <div className={styles.time}>
                  <div>00</div>
                  <div>00</div>
                  <div className={styles.ampm}>pm</div>
                </div>
                <div className={styles.date}>
                  <div>12</div>
                  <div>/</div>
                  <div>28</div>
                  <div className={styles.day}>Tuesday</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.preferredTimes}>
            <h2>Select your preferred times</h2>
            <div className={styles.timeTable}>
              <div className={styles.tableHead}>
                <div className={styles.overlappingTimes}>Overlapping times</div>
                <div className={styles.partnerPick}>Samuel's pick</div>
                <div className={styles.myPick}>Your pick</div>
              </div>
              <div className={styles.tableBody}>
                <div className={styles.row}>
                  <div className={styles.overlappingTimes}>
                    <h3>Tuesday 3:00 pm</h3>
                    <div>Wednesday 5:00 am KST</div>
                  </div>
                  <div className={styles.partnerPick}></div>
                  <div className={styles.myPick}>(sq)</div>
                  <div className={styles.state}>Finalize</div>
                </div>

                <div className={styles.row}>
                  <div className={styles.overlappingTimes}>
                    <h3>Tuesday 3:00 pm</h3>
                    <div>Wednesday 5:00 am KST</div>
                  </div>
                  <div className={styles.partnerPick}></div>
                  <div className={styles.myPick}>(sq)</div>
                  <div className={styles.state}>Finalize</div>
                </div>

                <div className={styles.row}>
                  <div className={styles.overlappingTimes}>
                    <h3>Tuesday 3:00 pm</h3>
                    <div>Wednesday 5:00 am KST</div>
                  </div>
                  <div className={styles.partnerPick}></div>
                  <div className={styles.myPick}>(sq)</div>
                  <div className={styles.state}>Finalize</div>
                </div>

                <div className={styles.row}>
                  <div className={styles.overlappingTimes}>
                    <h3>Tuesday 3:00 pm</h3>
                    <div>Wednesday 5:00 am KST</div>
                  </div>
                  <div className={styles.partnerPick}></div>
                  <div className={styles.myPick}>(sq)</div>
                  <div className={styles.state}>Finalize</div>
                </div>

                <div className={styles.row}>
                  <div className={styles.overlappingTimes}>
                    <h3>Tuesday 3:00 pm</h3>
                    <div>Wednesday 5:00 am KST</div>
                  </div>
                  <div className={styles.partnerPick}></div>
                  <div className={styles.myPick}>(sq)</div>
                  <div className={styles.state}>Finalize</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
