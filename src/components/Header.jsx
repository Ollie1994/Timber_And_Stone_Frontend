import "../styles/header.css";
// Imported logo as it will only take up part of header
import logo from "../assets/logo.png";
// To check if user is logged in
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
        <img className="logo" src={logo} alt="Timber + Stone Logo" />
        <h1>TIMBER + STONE</h1>

        {isLoggedIn ? (
          <button className="logButton" onClick={handleLogout}>
            Log out
          </button>
        ) : (
          <Link className="link" to="/loginpage">
            <button className="logButton">Login</button>
          </Link>
        )}
      </div>
    </header>
  );
};
export default Header;
