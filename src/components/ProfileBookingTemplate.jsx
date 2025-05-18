import "../styles/profileBookingTemplate.css";
import Button from "./Button";
import { useState, useEffect } from "react";


// Single booking
const ProfileBookingTemplate = ({ booking }) => {
  return (
    <div className="profileBookingTemplate-profileBookingTemplateContainer">
      <div className="profileBookingTemplate-singleBookingContainer">
        <div className="profileBookingTemplate-leftColumn">
          <div className="profileBookingTemplate-row">
            <div className="h7">BookingNumber: {booking.bookingNumber}</div>
          </div>
          <div className="profileBookingTemplate-row">
            <div className="h7">User: {booking.user.username}</div>
          </div>
          <div className="profileBookingTemplate-row">
            <div className="h7">Rental: {booking.rental.title}</div>
          </div>
          <div className="profileBookingTemplate-row">
            <div className="h7">isPaid: {booking.paid ? "True" : "False"}</div>
          </div>
          <div className="profileBookingTemplate-row">
            <div className="h7">Status: {booking.bookingStatus}</div>
          </div>
          <div className="profileBookingTemplate-row">
            <div className="h7">Check-in: {booking.period.startDate}</div>
          </div>
          <div className="profileBookingTemplate-row">
            <div className="h7">Check-out: {booking.period.endDate}</div>
          </div>
          <div className="profileBookingTemplate-row">
            <div className="h7">totalPrice: {booking.totalPrice}</div>
          </div>
          <div className="profileBookingTemplate-row">
            <div className="h7">
              Reviewed by you: {booking.reviewByUser ? "True" : "False"}
            </div>
          </div>
          <div className="profileBookingTemplate-row">
            <div className="h7">
              Reviewed by host: {booking.reviewByHost ? "True" : "False"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBookingTemplate;
