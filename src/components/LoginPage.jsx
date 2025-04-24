import { useState } from "react";
import "../styles/loginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="gridContainer">
      <div className="pictureContainer">
        <div className="picture"></div>
      </div>
      <div className="deadSpaceContainer">
        <div className="deadSpace"></div>
      </div>
      <div className="iconContainer">
        <div className="icon"></div>
      </div>
      <div className="loginRegisterContainer">
        <div className="loginRegister">
          <h3>Welcome back!</h3>
          <div className="betweenButtons">
            <button className="loginButton">Login</button>
            <button className="registerButton">Register</button>
          </div>
        </div>
      </div>
      <div className="contactUsContainer">
        <div className="contactUs">
          <h3>Log in to book your next stay</h3>
          <p>
            Please <strong>Contact us</strong> if you have any questions about
            your account and we will do our best to help you!
          </p>
        </div>
      </div>
      <div className="loginFormContainer">
        <form className="loginForm" onSubmit={""}>
          {/*exchange for  -    <form onSubmit={handleSubmit}>    - */}
          <div className="loginFormGroup">
            <label htmlFor="username">Username</label>
            <input
              className="inputGroup"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="loginFormGroup">
            <label htmlFor="password">Password</label>
            <input
              className="inputGroup"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="loginButton" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
