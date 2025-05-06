import "../styles/header.css";
// Imported logo as it will only take up part of header
import logo from "../assets/logo.png";
// To check if user is logged in
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Logo = () => {
  return (
    <div>
      <img className="logo" src={logo} alt="Image of the Timber and Stone Logo" />
    </div>
  );
};
export default Logo;
