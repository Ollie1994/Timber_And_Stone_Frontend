import "../styles/rental.css";
import Button from "../components/Button";
import IconRow from "../components/IconRow";
import RentalTitleSection from "../components/RentalTitleSection";
import Review from "../components/Review";
import ImageGrid from "../components/ImageGrid";
import Amenities from "../components/Amenities";

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

        <div className="flex-container vertical">
          <p className="description">
            A whimsical treehouse nestled in the forests of Bavaria, Germany.
            The treehouse is elevated in the treetops, with large windows
            offering a view of the dense green canopy below. The design is
            modern and minimalist, with wooden accents and a spacious deck. The
            atmosphere is peaceful, with birds chirping and sunlight filtering
            through the leaves, creating a calming, nature-filled retreat.{" "}
            <br />
            <br />
            Surrounded by towering pines and the gentle rustle of leaves, the
            treehouse offers a rare kind of stillness—where time slows, and the
            outside world feels miles away. Inside, the space is thoughtfully
            designed to invite calm: clean lines, soft textures, and warm
            natural materials come together to create a sanctuary that’s both
            simple and deeply comforting. Mornings begin with golden light
            spilling through the trees, casting gentle patterns on the wooden
            floors, while evenings invite you to unwind on the deck under a
            canopy of stars. <br />
            <br /> As your host, I’m Fritz—and this treehouse is my heart and
            hands in one place. I designed and built it myself, board by board,
            with the intention of creating something rooted in both simplicity
            and soul. Every curve, window, and wooden joint was shaped with
            care, guided by the forest around it. I’m passionate about slow
            living and deep rest, and I believe spaces can heal us when they’re
            made with love. Whether you're here to write, wander, or just listen
            to the wind move through the pines, I’ll make sure you feel truly at
            home. You’ll often find me nearby—tending the garden, baking bread,
            or happy to share a story over a warm drink.
          </p>
          <div className="flex-container right">
            <Button>
              <h4>Show more...</h4>
            </Button>
          </div>
        </div>

        <svg
          className="line"
          viewBox="0 0 1280 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 2H1280" stroke="#3C4634" strokeWidth="3" />
        </svg>
        <Amenities></Amenities>
        <Review></Review>
      </div>
    </div>
  );
};
export default RentalPage;
