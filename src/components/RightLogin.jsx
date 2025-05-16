import "../styles/loginPage.css";
import Logo from "./Logo";
import Button from "./Button";

const RightLogin = ({
  username,
  password,
  handleUsernameCheck,
  handlePasswordCheck,
  handleSubmit,
  displayEmptyUsername,
  displayEmptyPassword,
  displayLoginError,
}) => {
  return (
    <>
      <div className="deadSpaceContainer">
        <div className="deadSpace"></div>
      </div>
      <div className="iconContainer">
        <Logo />
      </div>
      <div className="loginRegisterContainer">
        <div className="loginRegister">
          <h3>Welcome back!</h3>
          <div className="betweenButtons">
            <Button>
              <h5>Login</h5>
            </Button>
            <Button>
              <h5>Register</h5>
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
            <label htmlFor="username">
              <h6>Username:</h6>
            </label>
            <input
              className="inputGroup"
              type="text"
              value={username}
              onChange={(e) => handleUsernameCheck(e.target.value)}
              placeholder="Enter your username"
            />
          </div>
          {displayEmptyUsername && <h6>Username can not be empty.</h6>}

          <div className="loginFormGroup">
            <label htmlFor="password">
              <h6>Password:</h6>
            </label>
            <input
              className="inputGroup"
              type="password"
              value={password}
              onChange={(e) => handlePasswordCheck(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          {displayEmptyPassword && <h6>Password can not be empty.</h6>}
          <Button type="submit"><h5>Login</h5></Button>
          {displayLoginError && <h6>Incorrect username or password.</h6>}
        </form>
      </div>
    </>
  );
};

export default RightLogin;
