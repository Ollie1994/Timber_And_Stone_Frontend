import "../styles/rentalPage.css";
import Button from "../components/Button";
import IconRow from "../components/IconRow";
import TitleSection from "../components/TitleSection";
import ImageGrid from "../components/ImageGrid";
import Review from "../components/Review";
import Amenities from "../components/Amenities";
import ReviewBox from "../components/ReviewBox";
import BookingWindow from "../components/BookingWindow";
import Divider from "../components/Divider";
import Description from "../components/RentalDescription";

const RentalPage = () => {
  return (
    <div className="rentalPage-fullContainer">
      <div className="rentalPage-innerContainer">
        <TitleSection></TitleSection>
        <ImageGrid />
        <IconRow></IconRow>
        <Divider></Divider>
        <Description/>
        <Divider></Divider>
        <div className="rentalPage-flexContainer">
          <div className="rentalPage-flexContainer rentalPage-vertical">
            <Amenities></Amenities>
            <ReviewBox>
          <Review></Review>
          </ReviewBox>
          </div>
          <div className="rentalPage-bookingContainer rentalPage-flexContainer">
            <BookingWindow></BookingWindow>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RentalPage;
