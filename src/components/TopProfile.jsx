import "../styles/topProfile.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserProfileById } from "../api/userService";
import Divider from "../components/Divider"

const TopProfile = () => {
  const [user, setUser] = useState({});
  const [address, setAddress] = useState({});
  const [rating, setRating] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  //Get user
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUserProfileById(id);
        setUser(data);
        setAddress(data.address);
        setRating(data.rating);
      } catch (err) {
        console.log("Error " + err);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="topProfile-topProfileContainer">
      <h1 className="topProfile-nameContainer">
        {user.firstName} {user.lastName}
      </h1>
      <div className="topProfile-profilePhotoContainer">
      <img
            className="topProfile-profilePhoto"
            src={user.profilePhoto}
            alt="profile photo"
          ></img>
          </div>
          <div className="topProfile-userInfoContainer">
        <h5 className="topProfile-username">Username: {user.username}</h5>
        <h5 className="topProfile-email">Email: {user.email}</h5>
        <h5 className="topProfile-phoneNumber">Phonenumber: {user.phoneNumber}</h5>
        </div>
        <Divider></Divider>

    </div>
  );
};

export default TopProfile;
