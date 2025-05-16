import { useRef, useState, useEffect } from "react";
import Button from "./Button";
import { useParams } from "react-router-dom";
import { getRentalPageById } from "../api/rentalService";
import "../styles/rentalDescription.css";

const Description = () => {
  const textRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const maxLines = 6;

  const [rental, setRental] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchRental = async () => {
      try {
        const data = await getRentalPageById(id);
        setRental(data);
      } catch (err) {
        console.error("Error fetching rental:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRental();
  }, [id]);

  useEffect(() => {
    const checkOverflow = () => {
      const element = textRef.current;
      if (element && rental?.description) {
        const style = window.getComputedStyle(element);
        const lineHeight =
          parseFloat(style.lineHeight) || parseFloat(style.fontSize) * 1.2;
        const totalLines = element.scrollHeight / lineHeight;
        setIsOverflowing(totalLines > maxLines);
      }
    };

    if (rental?.description) {
      checkOverflow();
      window.addEventListener("resize", checkOverflow);
      return () => window.removeEventListener("resize", checkOverflow);
    }
  }, [rental, maxLines]);

  const toggleExpanded = () => setExpanded((prev) => !prev);

  const descrClass = expanded
    ? "expanded-description"
    : "collapsed-description";

  return (
    <div className="RentalDescription-descrCont">
      <p ref={textRef} className={descrClass}>
        {rental?.description || "No description provided."}
      </p>

      {isOverflowing && (
        <div className="RentalDescription-buttonCont">
          <Button onClick={toggleExpanded}>
            <h5>{expanded ? "Show Less" : "Show More"}</h5>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Description;
