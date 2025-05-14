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
              onChange={(e) => handleUsernameCheck(e.target.value)}
              placeholder="Enter your username"
            />
          </div>
          {displayEmptyUsername && <h5>Username can not be empty.</h5>}
          <div className="loginFormGroup">
            <label htmlFor="password">Password</label>
            <input
              className="inputGroup"
              type="password"
              value={password}
              onChange={(e) => handlePasswordCheck(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          {displayEmptyPassword && <h5>Password can not be empty.</h5>}
          <Button type="submit">Login</Button>
          {displayLoginError && <h5>Incorrect username or password.</h5>}
        </form>
      </div>
    </>
  );
};

export default RightLogin;
