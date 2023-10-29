import React, { useState } from "react";
import styled from "styled-components";
import girlImg from "./assets/girlsvg.svg";
import "./log.css";

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const RightColumn = styled.div`
  flex: 1;
  padding: 0 20px;

  @media (min-width: 768px) {
    flex: 3;
  }
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Image = styled.img`
  width: 70%;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 50%;
  }
`;

const LoginForm = styled.form`
  font-family: Poppins;
  color: #04072f;
  padding: 35px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.16);

  h1 {
    color: #04072f;
    text-align: center;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 110%;
  }

  label {
    margin: 10px 0;
    color: #04072f;
  }

  input {
    margin: 5px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    position: relative;
    width: 100%; /* Set the width to 100% to match login input */
  }

  .password-toggle {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }

  button {
    margin-top: 10px;
    padding: 10px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 50%;
    margin: 0 auto;
  }
`;

const RememberMe = styled.label`
  display: flex;
  align-items: center;
  margin: 10px 0;

  input {
    margin-right: 5px;
  }

  // Adjust the width of the label as needed to maintain position
  label {
    width: 100px;
  }
`;

const ChangePasswordLink = styled.a`
  text-decoration: underline;
  color: #3498db;
  cursor: pointer;
  margin-top: 10px;
  color: #f78719;
  text-align: right;
`;

const TermsAndConditions = styled.label`
  display: flex;
  align-items: center;
  margin: 10px 0;

  input {
    margin-right: 5px;
  }

  a {
    color: #f78719;
  }
`;

const RegisterHere = styled.p`
  text-align: center;
  a {
    color: #f78719;
    text-decoration: none;
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export default function Log() {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      <LeftColumn>
        <Image src={girlImg} alt="Left Column Image" />
      </LeftColumn>
      <RightColumn>
        <LoginForm>
          <h1>Login</h1>
          <label htmlFor="loginId">Login ID:</label>
          <input type="text" id="loginId" placeholder="Enter login ID" />
          <label htmlFor="password">Password:</label>
          <div id="passwordfield" style={{ position: "relative" }}>
            <input
              id="myPass"
              placeholder="Enter password"
              type={showPassword ? "text" : "password"}
            />
            <i
              className={`fa ${
                showPassword ? "fa-eye" : "fa-eye-slash"
              } password-toggle`}
              onClick={handleTogglePassword}
              aria-hidden="true"
            ></i>
          </div>
          <ChangePasswordLink
            onClick={() => alert("Redirect to change password page")}
          >
            Change Password
          </ChangePasswordLink>
          <RememberMe style={{ textAlign: "left" }}>
            <input type="checkbox" id="rememberMe" />
            Remember Me
          </RememberMe>
          <TermsAndConditions>
            <input type="checkbox" id="agreeTerms" />
            <span>
              I agree to the
              <a href="#">Terms and Conditions</a>
            </span>
          </TermsAndConditions>
          <button type="submit">Login</button>
          <p></p>
          <RegisterHere>
            Don’t have an account? <a href="#">Register Here</a>
          </RegisterHere>
        </LoginForm>
      </RightColumn>
    </Container>
  );
}
