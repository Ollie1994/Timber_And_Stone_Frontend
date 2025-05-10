import "../styles/rental.css";
import Button from "../components/Button";
import IconRow from "../components/IconRow";
import RentalTitleSection from "../components/RentalTitleSection";
import Review from "../components/Review";
import ImageGrid from "../components/ImageGrid";
import Amenities from "../components/Amenities";
import BookingWindow from "../components/BookingWindow";
import Description from "../components/RentalDescription";

const RentalPage = () => {
  return (
    <div className="full-container">
      <div className="inner-container">
        <RentalTitleSection></RentalTitleSection>

        <ImageGrid />

        <IconRow></IconRow>

        <svg
          className="line"
          viewBox="0 0 1280 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 2H1280" stroke="#3C4634" strokeWidth="3" />
        </svg>

        <Description/>

        <svg
          className="line"
          viewBox="0 0 1280 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 2H1280" stroke="#3C4634" strokeWidth="3" />
        </svg>

        <div className="flex-container">
          <div className="flex-container vertical">
            <Amenities></Amenities>
            <Review></Review>
          </div>
          <div className="booking-container flex-container">
            <BookingWindow></BookingWindow>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RentalPage;
