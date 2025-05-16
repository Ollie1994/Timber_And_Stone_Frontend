import "../styles/profileBookingTemplate.css";


// Single booking
const ProfileBookingTemplate = ({ booking }) => {

  



  return (
    <div className="profileBookingTemplate-profileBookingTemplateContainer">
     <div className="profileBookingTemplate-singleBookingContainer">
      <div className="profileBookingTemplate-bookingNumberContainer"></div>
      <div className="profileBookingTemplate-rentalTitleContainer"></div>
      <div className="profileBookingTemplate-periodContainer"></div>
      <div className="profileBookingTemplate-isPaidContainer"></div>
      <div className="profileBookingTemplate-bookingStatusContainer"></div>

     </div>
    </div>
  );
};

export default ProfileBookingTemplate;