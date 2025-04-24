import { useState } from "react";
import "../styles/loginPage.css";

const LoginPage = () => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

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
        <div className="loginRegiser"></div>
      </div>
      <div className="contactUsContainer">
        <div className="contactUs"></div>
      </div>
      <div className="loginFormContainer">
        <div className="loginForm"></div>
      </div>
    </div>
  );
};
export default LoginPage;
