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

  return (
    <div className="header-headerContainer">
      <div className="header-topContainer">
        <div className="header-logoContainer">
          <Logo color="white" />
          <h1>TIMBER + STONE</h1>
        </div>
        {isLoggedIn ? (
          <div className="header-buttonContainer">
            <Button onClick={handleNavigate}>
              <h3>Profile Page</h3>
            </Button>
          </div>
        ) : (
         <Button>Not logged in </Button>
        )}
        {isLoggedIn ? (
          <div className="header-buttonContainer">
            <Button onClick={handleLogout}>
              <h3>Log Out</h3>
            </Button>
          </div>
        ) : (
          <Link to="/loginpage">
            <div className="header-buttonContainer">
              <Button>
                <h3>Log In</h3>
              </Button>
            </div>
          </Link>
        )}
      </div>
    
    </div>
  );
};
export default Header;
