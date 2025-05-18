import "../styles/profileBookingsTemplate.css";
import Button from "./Button";
import ProfileBookingTemplate from "./ProfileBookingTemplate";
import { useState, useEffect } from "react";

// Single booking
const ProfileBookingsTemplate = ({ booking }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="profileBookingsTemplate-profileBookingsTemplateContainer">
      <div className="profileBookingsTemplate-singleBookingContainer">
        <div className="profileBookingsTemplate-bookingNumberContainer">
          <h6>{booking.bookingNumber}</h6>
        </div>
        <div className="profileBookingsTemplate-rentalTitleContainer">
          <h6>{booking.rental.title}</h6>
        </div>
        <div className="profileBookingsTemplate-periodContainer">
          <h6>
            {booking.period.startDate} - {booking.period.endDate}
          </h6>
        </div>
        <div className="profileBookingsTemplate-isPaidContainer">
          <h6>isPaid: {booking.paid ? "True" : "False"}</h6>
        </div>
        <div className="profileBookingsTemplate-bookingStatusContainer">
          <h6>Status: {booking.bookingStatus}</h6>
        </div>
        <div className="profileBookingsTemplate-buttonContainer">
          <Button
            onClick={() => setExpanded(!expanded)}
            className="ProfileBookingsTemplate-seeMyBookingButton"
          >
            <h6>{expanded ? "Minimise" : "Expand"}</h6>
          </Button>
        </div>
      </div>
      <div
        className={`profileBookingsTemplate-bookingPopUpContainer ${
          expanded ? "expanded" : "collapsed"
        }`}
      >
        <ProfileBookingTemplate key={booking.id} booking={booking}></ProfileBookingTemplate>
      </div>
    </div>
  );
};

export default ProfileBookingsTemplate;
