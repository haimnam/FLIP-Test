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

const Session = ({ userLogin }) => {
  const { data: user, error } = useSWR<fetcherType, boolean>(
    "auth/check",
    userFetcher
  );

  if (error) return <div>error</div>;
  else if (!user) return <div>loading...</div>;
  else if (userLogin) {
    return <div>This is session page.</div>;
  } else {
    return <div>You do not have access.</div>;
  }
};

export default Session;
