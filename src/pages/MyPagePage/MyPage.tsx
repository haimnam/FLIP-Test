import React from "react";
import useSWR from "swr";
import { userFetcher } from "../../Store/UserContext.tsx";

const MyPage = ({ userLogin }) => {
  const { data: user, error } = useSWR("auth/check", userFetcher);

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
