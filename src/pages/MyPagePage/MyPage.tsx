import React from "react";
import useSWR from "swr";
import { userFetcher } from "../../Store/UserContext.tsx";

type myInfoType = {
  firstName: string;
  lastName: string;
  _id: string;
  school: string;
  schoolEmail: string;
  isClass: string;
  isMatching: boolean;
};
type fetcherType = {
  msg: string;
  myInfo: myInfoType;
  firstName: string;
  lastName: string;
  id: string;
};

const MyPage = ({ userLogin }) => {
  const { data: user, error } = useSWR<fetcherType, boolean>(
    "auth/check",
    userFetcher
  );

  if (error) return <div>error</div>;
  else if (!user) return <div>loading...</div>;
  else if (userLogin) {
    return (
      <div>
        <h1>Hello, {user.myInfo.firstName}!</h1>
        <p>
          Name: {user.myInfo.firstName} {user.myInfo.lastName}
        </p>
        <p>School: {user.myInfo.school}</p>
        <p>School Email: {user.myInfo.schoolEmail}</p>
      </div>
    );
  } else {
    return <div>You do not have access.</div>;
  }
};

export default MyPage;
