import "../styles/header.css";
// Imported logo as it will only take up part of header
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <div className="header">
      <div className="overlay"></div>
      <img className="logo" src={logo} alt="Timber + Stone Logo" />
        <h1>TIMBER + STONE</h1>
        <h2>Log in</h2>
      </div>
    </header>
    // Remove "Logo" and add actual logo image when Header background has been added with styling
  );
};
export default Header;
