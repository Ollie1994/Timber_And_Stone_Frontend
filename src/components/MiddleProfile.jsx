// https://stackoverflow.com/questions/43744312/react-js-get-current-date

import "../styles/middleProfile.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserProfileById } from "../api/userService";
import { getBookingsForProfileByUserId } from "../api/bookingService";
import Divider from "../components/Divider";
import Button from "../components/Button";
import ProfileBookingsTemplate from "./ProfileBookingsTemplate";
import { getCurrentDate } from "../helpers/HelpFunctions";

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
  const [activeBookings, setActiveBookings] = useState([]);

  const handleClick = () => {
    const bookingsSorted = bookings.map((booking) => console.log(booking.paid));
  };

  // filters away all the inactive bookings
  const reduceListToActiveBookingsOnly = (bookings) => {
    const todayDate = getCurrentDate();
    console.log("TodayDate: " + todayDate);
    const activeBookings = bookings.filter(
      (booking) =>
        booking.period.endDate >= todayDate &&
        booking.bookingStatus != "CANCELLED"
    );
    console.log(activeBookings);
    return activeBookings;
  };

  // for booking
  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const data = await getBookingsForProfileByUserId(id);
        setBookings(data);
        setActiveBookings(reduceListToActiveBookingsOnly(data));
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
        <h4 className="middleProfile-ratingText">My Rating: </h4>
        <h4 className="middleProfile-rating">
          {rating.averageRating}/5 - {rating.numberOfRatings} Reviews
        </h4>
        <Button className="middleProfile-seeMyReviewsButton">
          <h4>Show</h4>
        </Button>
      </div>
      <div className="middleProfile-bookingsBarContainer">
        <h4 className="middleProfile-bookingsText">My Bookings:</h4>
        <h4 className="middleProfile-bookings">
          {activeBookings.length} active bookings
        </h4>
        <Button
          onClick={() => setExpanded(!expanded)}
          className="middleProfile-seeMyBookingsButton"
        >
          <h4>{expanded ? "Hide" : "Show"}</h4>
        </Button>
      </div>
      <div
        className={`middleProfile-bookingPopUpContainer ${
          expanded ? "expanded" : "collapsed"
        }`}
      >
        <div>
          <div className="middleProfile-bookingContainer">
            {activeBookings.map((activeBooking) => (
              <ProfileBookingsTemplate
                key={activeBooking.id}
                booking={activeBooking}
              />
            ))}
          </div>
        </div>
      </div>

      <Divider></Divider>
    </div>
  );
};

export default MiddleProfile;
