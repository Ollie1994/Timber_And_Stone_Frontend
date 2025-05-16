import { useState } from "react";
import "../styles/loginPage.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import LeftLogin from "../components/LeftLogin";
import RightLogin from "../components/RightLogin";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [displayLoginError, setDisplayLoginError] = useState(false);
  const [displayEmptyUsername, setDisplayEmptyUsername] = useState(false);
  const [displayEmptyPassword, setDisplayEmptyPassword] = useState(false);

  const navigate = useNavigate();
  // konsumerar contexten
  const { login } = useAuth();

  // Hides errors when values are entered.
  const handlePasswordCheck = (enteredPassword) => {
    setDisplayLoginError(false);
    setPassword(enteredPassword);
    if (enteredPassword) {
      setDisplayEmptyPassword(false);
    }
  };

  const handleUsernameCheck = (enteredUsername) => {
    setDisplayLoginError(false);
    setUsername(enteredUsername);
    if (enteredUsername) {
      setDisplayEmptyUsername(false);
    }
  };

  // When submit button is clicked
  const handleSubmit = async (e) => {
    e.preventDefault();

    //Check if empty
    if (!username) {
      setDisplayEmptyUsername(true);
    }
    if (!password) {
      setDisplayEmptyPassword(true);
    }

    // Call API, catch error by displaying an error message.
    if (password && username) {
      try {
        await login(username, password);
        console.log("Navigating");
        navigate("/");
      } catch (err) {
        console.log("Login error:", err);
        setDisplayLoginError(true);
      }
    }
  };

  return (
    <div className="gridContainer">
      <LeftLogin />
      <RightLogin
        /* props for login form*/
        username={username}
        password={password}
        setUsername={setUsername}
        handleUsernameCheck={handleUsernameCheck}
        setPassword={setPassword}
        handlePasswordCheck={handlePasswordCheck}
        handleSubmit={handleSubmit}
        displayEmptyUsername={displayEmptyUsername}
        displayEmptyPassword={displayEmptyPassword}
        displayLoginError={displayLoginError}
      />
    </div>
  );
};

export default LoginPage;

