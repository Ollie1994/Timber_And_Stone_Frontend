import "../styles/middleProfile.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserProfileById } from "../api/userService";
import { getBookingsForProfileByUserId } from "../api/bookingService";
import Divider from "../components/Divider";
import Button from "../components/Button";
import ProfileBookingTemplate from "./ProfileBookingTemplate";

const MiddleProfile = () => {
  // General States
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [expanded, setExpanded] = useState(false);

  // User States
  const [user, setUser] = useState({});
  const [address, setAddress] = useState({});
  const [rating, setRating] = useState({});
  // Booking States
  const [bookings, setBookings] = useState([]);

  const handleClick = () => {
    const bookingsSorted = bookings.map((booking) => console.log(booking.paid));
  };

  // for booking
  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const data = await getBookingsForProfileByUserId(id);
        setBookings(data);
      } catch (err) {
        console.log("Error " + err);
      } finally {
        setLoading(false);
      }
    };
    fetchBooking();
  }, []);

  // for user
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
    <div className="middleProfile-middleProfileContainer">
      <div className="middleProfile-ratingBarContainer">
        <h3 className="middleProfile-ratingText">My Rating: </h3>
        <h3 className="middleProfile-rating">
          {rating.averageRating}/5 - {rating.numberOfRatings} Reviews
        </h3>
        <Button className="middleProfile-seeMyReviewsButton">
          <h3>See my reviews</h3>
        </Button>
      </div>
      <div className="middleProfile-bookingsBarContainer">
        <h3 className="middleProfile-bookingsText">My Bookings:</h3>
        <h3 className="middleProfile-bookings">
          {bookings.length} total bookings
        </h3>
        <Button
          onClick={() => setExpanded(!expanded)}
          className="middleProfile-seeMyBookingsButton"
        >
          <h3>{expanded ? "Hide Bookings" : "Show Bookings"}</h3>
        </Button>
      </div>
      <div
        className={`middleProfile-bookingPopUpContainer ${
          expanded ? "expanded" : "collapsed"
        }`}
      >
        <div>
          <div className="middleProfile-bookingContainer">
            {bookings.map((booking) => (
              <ProfileBookingTemplate key={booking.id} booking={booking} />
            ))}
          </div>
        </div>
      </div>

      <Divider></Divider>
    </div>
  );
};

export default MiddleProfile;
