import { useState } from "react";
import "../styles/loginPage.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import LeftLogin from "../components/LeftLogin";
import RightLogin from "../components/RightLogin";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  // konsumerar contexten
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(username, password);
      navigate("/");
    } catch (err) {
      console.log("error: " + err);
    }
  };

  return (
    <div className="gridContainer">
      <LeftLogin/>
      <RightLogin
      /* props for username, password, setUsername, setPassword, handleSubmit to RightLogin */
      username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};
export default LoginPage;

