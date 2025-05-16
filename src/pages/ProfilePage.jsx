import "../styles/profilePage.css";
import TopProfile from "../components/TopProfile";
import MiddleProfile from "../components/MiddleProfile";

const ProfilePage = () => {
  return (
    <div className="profilePage-profilePageContainer">
      <TopProfile></TopProfile>

      <MiddleProfile></MiddleProfile>
    </div>
  );
};
export default ProfilePage;
