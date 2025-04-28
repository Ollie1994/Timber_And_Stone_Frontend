import "../styles/header.css";
// Imported logo as it will only take up part of header
import logo from "../assets/logo.png";
// To check if user is logged in
import { useAuth } from "../hooks/useAuth";

const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header>
      <div className="header">
        <div className="overlay"></div>
        <img className="logo" src={logo} alt="Timber + Stone Logo" />
        <h1>TIMBER + STONE</h1>
        {isLoggedIn ? <h2>Log out</h2> : <h2>Log in</h2>}
      </div>
    </header>
  );
};
export default Header;
