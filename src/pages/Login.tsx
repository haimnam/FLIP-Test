import React, { useState, useRef, useEffect } from "react";
import axios from "../api/axios.tsx";
import styles from "../scss/Login.module.scss";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "https://test.flipnow.net/login",
          { userName: user, password: pwd },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res);
        });
      setUser("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
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
                <label htmlFor="username"></label>
                <input
                  placeholder="Username"
                  type="text"
                  id="username"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  required
                  value={user}
                ></input>
              </div>
              <div className={styles.password}>
                <label htmlFor="password"></label>
                <input
                  placeholder="Password"
                  type="password"
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  required
                  value={pwd}
                ></input>
              </div>
              <div className={styles.signUp}>
                <button>Sign in</button>
              </div>
              <div className={styles.footer}>
                <div>Forgot password?</div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
