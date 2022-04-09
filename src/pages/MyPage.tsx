import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../Store/AuthProvider.tsx";

type MyInfoType = {
  firstName: string;
  lastName: string;
  school: string;
  schoolEmail: string;
};

const MyPage = () => {
  const [myInfo, setMyInfo] = useState<MyInfoType>({
    firstName: "",
    lastName: "",
    school: "",
    schoolEmail: "",
  });
  const { authTokens } = useAuth();
  const accessToken = authTokens.accessToken;

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
        const myData = response.data.myInfo;
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
  }, [accessToken]);
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
