import "../styles/searchBar.css";
import searchIcon from "../assets/search.svg";
import ratingIcon from "../assets/RATING.svg";
import guestIcon from "../assets/people.svg";
import arrowIcon from "../assets/arrow.svg";
import locationIcon from "../assets/location-icon.svg";
import amenityIcon from "../assets/amenity.svg";
import calendarIcon from "../assets/calendar-tick.svg";
import categoryIcon from "../assets/CATEGORIES.svg";
import dollarIcon from "../assets/dollar-circle.svg";
import { useState, useEffect } from "react";

const SearchBar = () => {
  const [arrow, setArrow] = useState("arrowNone");
  const [window, setWindow] = useState("windowNone");

  return (
      <div className="iconsContainer">
        <div className="iconContainer">
          <img src={categoryIcon} alt=""></img>
          <div className={arrow}></div>
        </div>
        <div className="iconContainer">
          <img src={dollarIcon} alt=""></img>
          <div className={arrow}></div>
        </div>
        <div className="iconContainer">
          <img src={calendarIcon} alt=""></img>
          <div className={arrow}></div>
        </div>

        <div className="iconContainer">
          <img src={ratingIcon} alt=""></img>
          <div className={arrow}></div>
        </div>
        <div className="iconContainer">
          <img src={locationIcon} alt=""></img>
          <div className={arrow}></div>
        </div>
        <div className="iconContainer">
          <img src={guestIcon} alt=""></img>
          <div className={arrow}></div>
        </div>
        <div className="iconContainer">
          <img src={amenityIcon} alt=""></img>
          <div className={arrow}></div>
        </div>
        <div className="iconContainer">
          <img src={searchIcon} alt=""></img>
          <div className={arrow}></div>
        </div>
      </div>
  );
};
export default SearchBar;
