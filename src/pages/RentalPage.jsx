import "../styles/rental.css";
import Button from "../components/Button";
import IconRow from "../components/IconRow";
import RentalTitleSection from "../components/RentalTitleSection";
import ImageGrid from "../components/ImageGrid";
import Review from "../components/Review";
import Amenities from "../components/Amenities";
import ReviewBox from "../components/ReviewBox";
import BookingWindow from "../components/BookingWindow";
import Divider from "../components/Divider";
import Description from "../components/RentalDescription";

const RentalPage = () => {
  return (
    <div className="full-container">
      <div className="inner-container">
        <RentalTitleSection></RentalTitleSection>
        <ImageGrid />
        <IconRow></IconRow>
        <Divider></Divider>
        <Description/>
        <Divider></Divider>
        <div className="flex-container">
          <div className="flex-container vertical">
            <Amenities></Amenities>
            <ReviewBox>
          <Review></Review>
          </ReviewBox>
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
