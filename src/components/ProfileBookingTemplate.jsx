import "../styles/profileBookingTemplate.css";
import Divider from "./Divider";


// Single booking
const ProfileBookingTemplate = ({ booking }) => {

  



  return (
    <div className="profileBookingTemplate-profileBookingTemplateContainer">
     <div className="profileBookingTemplate-singleBookingContainer">
      <div className="profileBookingTemplate-bookingNumberContainer"><h3>{booking.bookingNumber}</h3></div>
      <div className="profileBookingTemplate-rentalTitleContainer"><h3>Rental: {booking.rental.title}</h3></div>
      <div className="profileBookingTemplate-periodContainer"><h3>Period: {booking.period.startDate} - {booking.period.endDate}</h3></div>
      <div className="profileBookingTemplate-isPaidContainer"><h3>isPaid: {booking.paid ? "True" : "False"}</h3></div>
      <div className="profileBookingTemplate-bookingStatusContainer"><h3>Status: {booking.bookingStatus}</h3></div>

     </div>
    </div>
  );
};

export default ProfileBookingTemplate;