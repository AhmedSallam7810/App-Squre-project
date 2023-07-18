import React, { useState } from "react";
import { Alert } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../store/actions";
import { loginFun } from "../services/loginService";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitform = async (e) => {
    e.preventDefault();

    try {
      const response = await loginFun(email, password);

      if (response.status == 200) {
        setLoginError(false);
        const result = await response.json();
        dispatch(login(result.token, result.data));
        navigate("/user/table");
      } else {
        setLoginError(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div class="container">
      <header class="header">
        <div class="social-icons">
          <a href="#">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </header>
      <div class="content">
        <h4 class="sign-word">sign in</h4>
        <form onSubmit={submitform}>
          <input
            type="email"
            class="input"
            placeholder="email"
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type="password"
            class="input"
            placeholder="Password"
            onChange={(e) => setpassword(e.target.value)}
          />
          {loginError ? (
            <span style={{ marginBottom: "14px", fontSize: "18px" }}>
              email or password is incorrect
            </span>
          ) : (
            ""
          )}
          <input type="submit" class="button" value="log in" />
        </form>
        <p class="signup-link">
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
