import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import styles from "../scss/Login.module.scss";
import { useAuth } from "../Store/AuthProvider.tsx";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();

  const userRef = useRef();
  const errRef = useRef();
  const [errMsg, setErrMsg] = useState("");

  const [user, setUser] = useState();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("access_token");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [userName, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios
        .post(
          "https://test.flipnow.net/login",
          { userName, password },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res);
          let token = res.data.accessToken;
          localStorage.setItem("access_token", token);
          localStorage.setItem("firstName", res.data.firstName);
          let config = {
            headers: {
              "access-token": token,
            },
          };
          setAuthTokens(res.data);
          setUser(res.data);
          console.log(token);
          console.log(config);
        });
      setUserName("");
      setPassword("");
    } catch (err) {
      console.log(err);
      errRef.current.focus();
    }
  };

  return (
    <div>
      {user ? (
        <div className={styles.success}>
          <span>Login Success</span>
          <div>Click the menu on the sidebar.</div>
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.title}>Login</div>
            <div className={styles.error} ref={errRef}>
              {errMsg}
            </div>
            <form className={styles.loginSection} onSubmit={handleSubmit}>
              <div className={styles.username}>
                <input
                  placeholder="Username"
                  type="text"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                ></input>
              </div>
              <div className={styles.password}>
                <input
                  placeholder="Password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                ></input>
              </div>
              <div className={styles.signUp}>
                <button>Sign in</button>
              </div>
              <div className={styles.footer}>Forgot password?</div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
