import React from "react";
import styles from "../../scss/ScheduleAndChat.module.scss";

const Chat = () => {
  return (
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
  );
};

export default Chat;
