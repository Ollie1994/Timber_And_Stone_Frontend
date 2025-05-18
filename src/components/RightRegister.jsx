import "../styles/rightRegister.css";
import Button from "./Button";

const RightRegister = ({
  username,
  password,
  email,
  firstName,
  lastName,
  usernameCheck,
  passwordCheck,
  emailCheck,
  firstNameCheck,
  lastNameCheck,
  handleSubmit
}) => {
  return (
    <div className="rightRegister-rightRegisterContainer">
      <div className="rightRegister-registerFormContainer">
        <form className="rightRegister-registerForm" onSubmit={handleSubmit}>
          <div className="rightRegister-registerFormGroup">
            <label htmlFor="username">
              <h6>Username:</h6>
            </label>
            <input
              className="rightRegister-inputGroup"
              type="text"
              value={username}
              onChange={(e) => usernameCheck(e.target.value)}
              placeholder="Enter your username"
            />
          </div>
          <div className="rightRegister-registerFormGroup">
            <label htmlFor="password">
              <h6>Password:</h6>
            </label>
            <input
              className="rightRegister-inputGroup"
              type="password"
              value={password}
              onChange={(e) => passwordCheck(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <div className="rightRegister-registerFormGroup">
            <label htmlFor="email">
              <h6>Email:</h6>
            </label>
            <input
              className="rightRegister-inputGroup"
              type="email"
              value={email}
              onChange={(e) => emailCheck(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="rightRegister-registerFormGroup">
            <label htmlFor="firstName">
              <h6>FirstName:</h6>
            </label>
            <input
              className="rightRegister-inputGroup"
              type="text"
              value={firstName}
              onChange={(e) => firstNameCheck(e.target.value)}
              placeholder="Enter your firstName"
            />
          </div>
          <div className="rightRegister-registerFormGroup">
            <label htmlFor="lastName">
              <h6>LastName:</h6>
            </label>
            <input
              className="rightRegister-inputGroup"
              type="text"
              value={lastName}
              onChange={(e) => lastNameCheck(e.target.value)}
              placeholder="Enter your lastName"
            />
          </div>
          <div className="rightRegister-buttonContainer">
            <Button type="submit">
              <h5>Register</h5>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RightRegister;
