import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../Store/AuthProvider.tsx";

const MyPage = () => {
  const [myInfo, setMyInfo] = useState({
    firstName: "",
    lastName: "",
    school: "",
    schoolEmail: "",
  });
  const { authTokens } = useAuth();
  let accessToken = authTokens.accessToken;

  useEffect(() => {
    const fetchGet = async () => {
      try {
        const response = await axios.get(
          "https://test.flipnow.net/auth/check",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        let myData = response.data.myInfo;
        setMyInfo({
          firstName: myData.firstName,
          lastName: myData.lastName,
          school: myData.school,
          schoolEmail: myData.schoolEmail,
        });
      } catch (e) {
        console.log(e);
      }
    };
    fetchGet();
  }, []);
  if (authTokens && localStorage.getItem("access_token")) {
    return (
      <div>
        <h1>Hello, {myInfo.firstName}!</h1>
        <p>
          Name: {myInfo.firstName} {myInfo.lastName}
        </p>
        <p>School: {myInfo.school}</p>
        <p>School Email: {myInfo.schoolEmail}</p>
      </div>
    );
  } else {
    return <div>You do not have access.</div>;
  }
};

export default MyPage;
