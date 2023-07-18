import React from "react";
import { FaUserCircle, FaFacebook, FaLinkedin } from "react-icons/fa";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);

  const onClickEnter = () => {
    if (token) {
      navigate("/user/table");
    } else navigate("/login");
  };
  return (
    <div class="container">
      <header class="header">
        <div class="social-icons">
          <a href="#">
            <i class="fab fa-facebook">
              <FaFacebook />
            </i>
          </a>
          <a href="#">
            <i class="fab fa-linkedin">
              <FaLinkedin />
            </i>
          </a>
        </div>
      </header>
      <div class="content">
        <h1 class="app-square">App Square</h1>
        <p class="description">
          A company for building and deploying web and mobile applications.
        </p>
        <button class="get-started" onClick={onClickEnter}>
          Get Started
        </button>
      </div>
    </div>
  );
};
export default LandingPage;
