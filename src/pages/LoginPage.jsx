import { useState } from "react";
import "../styles/loginPage.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import LeftLogin from "../components/LeftLogin";
import RightLogin from "../components/RightLogin";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  // konsumerar contexten
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(username, password);
      navigate("/");
    } catch (err) {
      console.log("error: " + err);
    }
  };

  return (
    <div className="gridContainer">
      <LeftLogin/>
      <RightLogin
      /* props for username, password, setUsername, setPassword, handleSubmit to RightLogin */
      username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};
export default LoginPage;

/* <div className="deadSpaceContainer">
        <div className="deadSpace"></div>
      </div>
      <div className="iconContainer">
        <Logo/>
      </div>
      <div className="loginRegisterContainer">
        <div className="loginRegister">
          <h3>Welcome back!</h3>
          <div className="betweenButtons">
            <Button>
              <h4>Login</h4>
            </Button>
            <Button>
              <h4>Register</h4>
            </Button>
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
        <form className="loginForm" onSubmit={handleSubmit}>
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
          <Button type="submit">Login</Button>
        </form>
      </div> */
