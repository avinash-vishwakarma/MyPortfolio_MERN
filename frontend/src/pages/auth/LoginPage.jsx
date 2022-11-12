import React from "react";
import { useContext } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../components/ui/Container";
import { AuthContext } from "../../contexts/authContexts";
import Layout from "../../layouts";
import classes from "./LoginPage.module.css";

const LoginPage = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const loginSubmitHandler = async (e) => {
    e.preventDefault();
    const loginData = {};
    loginData.username = usernameRef.current.value;
    loginData.password = passwordRef.current.value;

    try {
      const response = await fetch("/api/avi-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      const data = await response.json();

      if (data.status === "ok") {
        // redire to dashboardn page
        authContext.login(data.token);
        navigate("/admin/dashboard", { replace: true });
      } else {
        alert(data.error.message);
      }
    } catch (err) {
      alert("someting went wrong while login");
    }
  };

  return (
    <Layout>
      <section className={`${classes.loginSection}`}>
        <Container className={classes.centerSection}>
          <form
            onSubmit={loginSubmitHandler}
            className={classes.loginFormContainer}
          >
            <h2>login</h2>
            <input ref={usernameRef} type="text" placeholder="username" />
            <input ref={passwordRef} type="text" placeholder="password" />
            <button type="submit">login</button>
          </form>
        </Container>
      </section>
    </Layout>
  );
};

export default LoginPage;
