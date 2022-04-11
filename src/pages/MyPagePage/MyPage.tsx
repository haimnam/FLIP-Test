import React, { useEffect } from "react";
import {
  useUserState,
  useUserDispatch,
  getUser,
} from "../../Store/UserContext.tsx";

const MyPage = ({ userLogin }) => {
  const state = useUserState();
  const dispatch = useUserDispatch();
  const { data: user, loading, error } = state.user;
  const fetchData = () => {
    getUser(dispatch);
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>loading...</div>;
  if (error) return <div>error</div>;
  if (!user) return <button onClick={fetchData}>fetching</button>;

  if (userLogin) {
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
