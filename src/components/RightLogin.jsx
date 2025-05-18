import "../styles/rightLogin.css";
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
    <div className="rightLogin-rightLoginContainer">
    
      <div className="rightLogin-iconContainer">
        <Logo />
      </div>
      <div className="rightLogin-loginRegisterContainer">
        <div className="rightLogin-loginRegister">
          <h3>Welcome back!</h3>
          <div className="rightLogin-betweenButtons">
            <Button>
              <h5>Login</h5>
            </Button>
            <Button>
              <h5>Register</h5>
            </Button>
          </div>
        </div>
      </div>
      <div className="rightLogin-contactUsContainer">
        <div className="rightLogin-contactUs">
          <h3>Log in to book your next stay</h3>
          <p>
            Please <strong>Contact us</strong> if you have any questions about
            your account and we will do our best to help you!
          </p>
        </div>
      </div>
      <div className="rightLogin-loginFormContainer">
        <form className="rightLogin-loginForm" onSubmit={handleSubmit}>
          <div className="rightLogin-loginFormGroup">
            <label htmlFor="username">
              <h6>Username:</h6>
            </label>
            <input
              className="rightLogin-inputGroup"
              type="text"
              value={username}
              onChange={(e) => handleUsernameCheck(e.target.value)}
              placeholder="Enter your username"
            />
          </div>
          {displayEmptyUsername && <h6>Username can not be empty.</h6>}

          <div className="rightLogin-loginFormGroup">
            <label htmlFor="password">
              <h6>Password:</h6>
            </label>
            <input
              className="rightLogin-inputGroup"
              type="password"
              value={password}
              onChange={(e) => handlePasswordCheck(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          {displayEmptyPassword && <h6>Password can not be empty.</h6>}
          <div className="rightLogin-buttonContainer">
          <Button type="submit"><h5>Login</h5></Button></div>
          {displayLoginError && <h6>Incorrect username or password.</h6>}
        </form>
      </div>
    </div>
  );
};

export default RightLogin;
