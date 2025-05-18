import "../styles/header.css";
// To check if user is logged in
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const Header = () => {
  const { isLoggedIn } = useAuth();
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  // logga ut funktion
  const handleLogout = async () => {
    await logout();
    navigate("/loginpage");
  };
  const handleNavigate = async () => {
    navigate(`/profilepage/${currentUser.id}`);
  };
  const handleLogo = async () => {
    navigate("/");
  };

  return (
    <div className="header-headerContainer">
      <div className="header-topContainer">
        <div className="header-logoContainer" onClick={handleLogo}>
          <Logo color="white"/>
          <h1>TIMBER + STONE</h1>
        </div>
        {isLoggedIn ? (
          <div className="header-buttonContainer">
            <Button onClick={handleNavigate}>
              <h4>Profile Page</h4>
            </Button>
          </div>
        ) : (
          <Button>
            <h4>Not logged in</h4>
          </Button>
        )}
        {isLoggedIn ? (
          <div className="header-buttonContainer">
            <Button onClick={handleLogout}>
              <h4>Log Out</h4>
            </Button>
          </div>
        ) : (
          <Link to="/loginpage">
            <div className="header-buttonContainer">
              <Button>
                <h4>Log In</h4>
              </Button>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};
export default Header;
