import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../scss/Login.module.scss";
import { useAuth } from "../Store/AuthProvider.tsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

type LoginType = {
  userName: string;
  password: string;
};

const Login = ({ userLogin, setUserLogin }) => {
  const { setAuthTokens } = useAuth();
  const [account, setAccount] = useState<LoginType>({
    userName: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("access_token");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUserLogin(foundUser);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://test.flipnow.net/login",
        { userName: account.userName, password: account.password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response.data);
      localStorage.setItem("access_token", response.data.accessToken);
      setAuthTokens(response.data);
      setUserLogin(response.data);
      setAccount({ userName: "", password: "" });
      navigate("/home");
    } catch (e) {
      console.log(e);
      toast.error("이메일 또는 비밀번호가 일치하지 않습니다", {
        autoClose: 3000,
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const loginChange = (e, unit: string) => {
    if (unit === "userName") {
      setAccount((acc) => {
        return { ...acc, userName: e.target.value };
      });
    } else {
      setAccount((acc) => {
        return { ...acc, password: e.target.value };
      });
    }
  };

  const logOut = () => {
    localStorage.removeItem("access_token");
    setUserLogin(null);
  };

  return (
    <div>
      {userLogin ? (
        <div className={styles.success}>
          <span>Login Success</span>
          <div>Click the menu on the sidebar.</div>
          <button onClick={logOut}>Log Out</button>
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.title}>Login</div>
            <form className={styles.loginSection} onSubmit={handleSubmit}>
              <div className={styles.username}>
                <input
                  placeholder="Username"
                  type="text"
                  onChange={(e) => loginChange(e, "userName")}
                  value={account.userName}
                ></input>
              </div>
              <div className={styles.password}>
                <input
                  placeholder="Password"
                  type="password"
                  onChange={(e) => loginChange(e, "password")}
                  value={account.password}
                ></input>
              </div>
              <div className={styles.signUp}>
                <button>Sign in</button>
              </div>
              <div className={styles.footer}>Forgot password?</div>
            </form>
            <ToastContainer />
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
