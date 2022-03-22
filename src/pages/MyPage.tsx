import React from "react";
import styles from "../scss/App.module.scss";
import { useAuth } from "../Store/AuthProvider.tsx";

const MyPage = () => {
  const { authTokens } = useAuth();
  let firstName = localStorage.getItem("firstName");
  if (authTokens) {
    return (
      <div className={styles.contents}>
        <h1>Hello, {firstName}!</h1>
      </div>
    );
  } else {
    return <div className={styles.contents}>You do not have access.</div>;
  }
};

export default MyPage;
