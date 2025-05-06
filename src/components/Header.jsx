import "../styles/header.css";
// To check if user is logged in
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Logo from "./Logo";

const Header = () => {
  const { isLoggedIn } = useAuth();
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  // logga ut funktion
  const handleLogout = async () => {
    await logout();
    navigate("/loginpage");
  };

  return (
    <header>
      <div className="header">
        <div className="overlay"></div>

        <div className="logo-container">
          <Logo color="white" />
          <h1>TIMBER + STONE</h1>
        </div>

        {isLoggedIn ? (
          <Button onClick={handleLogout}>
            <h3>Log Out</h3>
          </Button>
        ) : (
          <Link className="link" to="/loginpage">
            <Button>
              <h3>Log In</h3>
            </Button>
          </Link>
        )}
      </div>
    </header>
  );
};
export default Header;
