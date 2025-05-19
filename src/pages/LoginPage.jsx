import { useState } from "react";
import "../styles/loginPage.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import LeftLogin from "../components/LeftLogin";
import RightLogin from "../components/RightLogin";
import RightRegister from "../components/RightRegister";
import Button from "../components/Button";
import Logo from "../components/Logo";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("0708945271");
  const [country, setCountry] = useState("Sverige");
  const [city, setCity] = useState("Göteborg");
  const [postalCode, setPostalCode] = useState("186 43");
  const [streetName, setStreetName] = useState("Gamlestads Brygga");
  const [streetNumber, setStreetNumber] = useState("10");
  const [latitude, setLatitude] = useState("55.485");
  const [longitude, setLongitude] = useState("88.364");
  const [profilePhoto, setProfilePhoto] = useState(
    "https://i.ibb.co/S4WnCc8C/profile-pic.jpg"
  );

  const [displayLoginError, setDisplayLoginError] = useState(false);
  const [displayEmptyUsername, setDisplayEmptyUsername] = useState(false);
  const [displayEmptyPassword, setDisplayEmptyPassword] = useState(false);

  // loginForm state
  const [expandedL, setExpandedL] = useState(true);
  // registerFrom state
  const [expandedR, setExpandedR] = useState(false);

  const navigate = useNavigate();
  // konsumerar contexten
  const { login } = useAuth();
  const { register } = useAuth();

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

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    // Call API, catch error by displaying an error message.

    try {
      await register(
        username,
        password,
        email,
        firstName,
        lastName,
        phoneNumber,
        country,
        city,
        postalCode,
        streetName,
        streetNumber,
        latitude,
        longitude,
        profilePhoto
      );
    } catch (err) {
      console.log("Login error:", err);
    }
    setExpandedR(false);
    setExpandedL(true);
  };

  return (
    <div className="loginPage-loginPageContainer">
      <div className="loginPage-leftContainer">
        <LeftLogin />
      </div>
      <div className="loginPage-rightContainer">
        <div className="loginPage-iconContainer">
          <Logo />
        </div>
        <h3 className="loginPage-welcomeBack">Welcome back!</h3>
        <div className="loginPage-betweenButtons">
          <Button onClick={() => setExpandedR(false) & setExpandedL(true)}>
            <h5>Login</h5>
          </Button>
          <Button onClick={() => setExpandedL(false) & setExpandedR(true)}>
            <h5>Register</h5>
          </Button>
        </div>
        <div
          className={`loginPage-loginPopUpContainer ${
            expandedL === true ? "expanded" : "collapsed"
          }`}
        >
          <RightLogin
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
        <div
          className={`loginPage-registerPopUpContainer ${
            expandedR === true ? "expanded" : "collapsed"
          }`}
        >
          <RightRegister
            username={username}
            password={password}
            email={email}
            firstName={firstName}
            lastName={lastName}
            usernameCheck={setUsername}
            passwordCheck={setPassword}
            emailCheck={setEmail}
            firstNameCheck={setFirstName}
            lastNameCheck={setLastName}
            handleSubmit={handleRegisterSubmit}
          ></RightRegister>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
