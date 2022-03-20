import React, { useState, useRef, useEffect } from "react";
import axios from "../api/axios.tsx";
import styles from "../scss/Login.module.scss";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [userName, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
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
        });
      setUserName("");
      setPassword("");
      setSuccess(true);
    } catch (err) {
      console.log(err);
      errRef.current.focus();
    }
  };

  return (
    <div>
      {success ? (
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
