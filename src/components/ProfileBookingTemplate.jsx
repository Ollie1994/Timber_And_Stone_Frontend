import "../styles/profileBookingTemplate.css";
import Divider from "./Divider";


// Single booking
const ProfileBookingTemplate = ({ booking }) => {

  



  return (
    <div className="profileBookingTemplate-profileBookingTemplateContainer">
     <div className="profileBookingTemplate-singleBookingContainer">
      <div className="profileBookingTemplate-bookingNumberContainer"><h6>{booking.bookingNumber}</h6></div>
      <div className="profileBookingTemplate-rentalTitleContainer"><h6>{booking.rental.title}</h6></div>
      <div className="profileBookingTemplate-periodContainer"><h6>{booking.period.startDate} - {booking.period.endDate}</h6></div>
      <div className="profileBookingTemplate-isPaidContainer"><h6>isPaid: {booking.paid ? "True" : "False"}</h6></div>
      <div className="profileBookingTemplate-bookingStatusContainer"><h6>Status: {booking.bookingStatus}</h6></div>

     </div>
    </div>
  );
};

export default ProfileBookingTemplate;