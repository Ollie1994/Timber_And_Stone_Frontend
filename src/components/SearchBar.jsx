import "../styles/searchBar.css";
import searchIcon from "../assets/search.svg";
import ratingIcon from "../assets/RATING.svg";
import guestIcon from "../assets/CAPACITY24.svg";
import arrowIcon from "../assets/ArrowSmaller.svg";
import locationIcon from "../assets/CITY24.svg";
import amenityIcon from "../assets/AMENITIES24.svg";
import calendarIcon from "../assets/AVAILABILTY24.svg";
import categoryIcon from "../assets/CATEGORIES.svg";
import dollarIcon from "../assets/dollar-circle24.svg";
import { useState, useEffect } from "react";

const SearchBar = () => {
  const [categoryArrowContainer, setCategoryArrowContainer] =
    useState("arrowContainerNone");
  const [categoryWindowContainer, setCategoryWindowContainer] = useState(
    "windowContainerNone"
  );
  const [dollarArrowContainer, setDollarArrowContainer] =
    useState("arrowContainerNone");
  const [dollarWindowContainer, setDollarWindowContainer] = useState(
    "windowContainerNone"
  );
  const [calendarArrowContainer, setCalendarArrowContainer] =
    useState("arrowContainerNone");
  const [calendarWindowContainer, setCalendarWindowContainer] = useState(
    "windowContainerNone"
  );
  const [ratingArrowContainer, setRatingArrowContainer] =
    useState("arrowContainerNone");
  const [ratingWindowContainer, setRatingWindowContainer] = useState(
    "windowContainerNone"
  );
  const [locationArrowContainer, setLocationArrowContainer] =
    useState("arrowContainerNone");
  const [locationWindowContainer, setLocationWindowContainer] = useState(
    "windowContainerNone"
  );
  const [guestsArrowContainer, setGuestsArrowContainer] =
    useState("arrowContainerNone");
  const [guestsWindowContainer, setGuestsWindowContainer] = useState(
    "windowContainerNone"
  );
  const [amenitiesArrowContainer, setAmenitiesArrowContainer] =
    useState("arrowContainerNone");
  const [amenitiesWindowContainer, setAmenitiesWindowContainer] = useState(
    "windowContainerNone"
  );
  const [searchArrowContainer, setSearchArrowContainer] =
    useState("arrowContainerNone");
  const [searchWindowContainer, setSearchWindowContainer] = useState(
    "windowContainerNone"
  );

  // handles the states of the searchAndFilter popups
  function handleButtonClick(arrow, window, state) {
    if (
      categoryArrowContainer === "categoryArrowContainer" ||
      dollarArrowContainer === "dollarArrowContainer" ||
      calendarArrowContainer === "calendarArrowContainer" ||
      ratingArrowContainer === "ratingArrowContainer" ||
      locationArrowContainer === "locationArrowContainer" ||
      guestsArrowContainer === "guestsArrowContainer" ||
      amenitiesArrowContainer === "amenitiesArrowContainer" ||
      searchArrowContainer === "searchArrowContainer"
    ) {
      setCategoryArrowContainer("arrowContainerNone");
      setCategoryWindowContainer("windowContainerNone");

      setDollarArrowContainer("arrowContainerNone");
      setDollarWindowContainer("windowContainerNone");

      setCalendarArrowContainer("arrowContainerNone");
      setCalendarWindowContainer("windowContainerNone");

      setRatingArrowContainer("arrowContainerNone");
      setRatingWindowContainer("arrowContainerNone");

      setLocationArrowContainer("arrowContainerNone");
      setLocationWindowContainer("arrowContainerNone");

      setGuestsArrowContainer("arrowContainerNone");
      setGuestsWindowContainer("arrowContainerNone");

      setAmenitiesArrowContainer("arrowContainerNone");
      setAmenitiesWindowContainer("arrowContainerNone");

      setSearchArrowContainer("arrowContainerNone");
      setSearchWindowContainer("arrowContainerNone");
    } else {
      switch (state) {
        case "category":
          setCategoryArrowContainer(arrow);
          setCategoryWindowContainer(window);
          break;
        case "dollar":
          setDollarArrowContainer(arrow);
          setDollarWindowContainer(window);
          break;
        case "calendar":
          setCalendarArrowContainer(arrow);
          setCalendarWindowContainer(window);
          break;
        case "rating":
          setRatingArrowContainer(arrow);
          setRatingWindowContainer(window);
          break;
        case "location":
          setLocationArrowContainer(arrow);
          setLocationWindowContainer(window);
          break;
        case "guests":
          setGuestsArrowContainer(arrow);
          setGuestsWindowContainer(window);
          break;
        case "amenities":
          setAmenitiesArrowContainer(arrow);
          setAmenitiesWindowContainer(window);
          break;
        case "search":
          setSearchArrowContainer(arrow);
          setSearchWindowContainer(window);
          break;
      }
    }
  }

  return (
    <div>
      <div className="iconsContainer">
        <div className="iconContainer">
          <div
            onClick={() =>
              handleButtonClick(
                "categoryArrowContainer",
                "categoryWindowContainer",
                "category"
              )
            }
          >
            <div className="iconFlex">
              <img src={categoryIcon} alt=""></img>
            </div>
          </div>
          <div className={categoryArrowContainer}>
            <img className="arrow" src={arrowIcon} alt="arrow Icon"></img>
          </div>
          <div className={categoryWindowContainer}>
            <div className="categoryWindow"></div>
          </div>
        </div>
        <div className="iconContainer">
          <div
            onClick={() =>
              handleButtonClick(
                "dollarArrowContainer",
                "dollarWindowContainer",
                "dollar"
              )
            }
          >
            <div className="iconFlex">
              <img src={dollarIcon} alt=""></img>
            </div>
          </div>
          <div className={dollarArrowContainer}>
            <img className="arrow" src={arrowIcon} alt="arrow Icon"></img>
          </div>
          <div className={dollarWindowContainer}>
            <div className="dollarWindow"></div>
          </div>
        </div>
        <div className="iconContainer">
          <div
            onClick={() =>
              handleButtonClick(
                "calendarArrowContainer",
                "calendarWindowContainer",
                "calendar"
              )
            }
          >
            <div className="iconFlex">
              <img src={calendarIcon} alt=""></img>
            </div>
          </div>
          <div className={calendarArrowContainer}>
            <img className="arrow" src={arrowIcon} alt="arrow Icon"></img>
          </div>
          <div className={calendarWindowContainer}>
            <div className="calendarWindow"></div>
          </div>
        </div>
        <div className="iconContainer">
          <div
            onClick={() =>
              handleButtonClick(
                "ratingArrowContainer",
                "ratingWindowContainer",
                "rating"
              )
            }
          >
            <div className="iconFlex">
              <img src={ratingIcon} alt=""></img>
            </div>
          </div>
          <div className={ratingArrowContainer}>
            <img className="arrow" src={arrowIcon} alt="arrow Icon"></img>
          </div>
          <div className={ratingWindowContainer}>
            <div className="ratingWindow"></div>
          </div>
        </div>
        <div className="iconContainer">
          <div
            onClick={() =>
              handleButtonClick(
                "locationArrowContainer",
                "locationWindowContainer",
                "location"
              )
            }
          >
            <div className="iconFlex">
              <img src={locationIcon} alt=""></img>
            </div>
          </div>
          <div className={locationArrowContainer}>
            <img className="arrow" src={arrowIcon} alt="arrow Icon"></img>
          </div>
          <div className={locationWindowContainer}>
            <div className="locationWindow"></div>
          </div>
        </div>
        <div className="iconContainer">
          <div
            onClick={() =>
              handleButtonClick(
                "guestsArrowContainer",
                "guestsWindowContainer",
                "guests"
              )
            }
          >
            <div className="iconFlex">
              <img src={guestIcon} alt=""></img>
            </div>
          </div>
          <div className={guestsArrowContainer}>
            <img className="arrow" src={arrowIcon} alt="arrow Icon"></img>
          </div>
          <div className={guestsWindowContainer}>
            <div className="guestsWindow"></div>
          </div>
        </div>
        <div className="iconContainer">
          <div
            onClick={() =>
              handleButtonClick(
                "amenitiesArrowContainer",
                "amenitiesWindowContainer",
                "amenities"
              )
            }
          >
            <div className="iconFlex">
              <img src={amenityIcon} alt=""></img>
            </div>
          </div>
          <div className={amenitiesArrowContainer}>
            <img className="arrow" src={arrowIcon} alt="arrow Icon"></img>
          </div>
          <div className={amenitiesWindowContainer}>
            <div className="amenitiesWindow"></div>
          </div>
        </div>
        <div className="iconContainer">
          <div
            onClick={() =>
              handleButtonClick(
                "searchArrowContainer",
                "searchWindowContainer",
                "search"
              )
            }
          >
            <div className="iconFlex">
              <img src={searchIcon} alt=""></img>
            </div>
          </div>
          <div className={searchArrowContainer}>
            <img className="arrow" src={arrowIcon} alt="arrow Icon"></img>
          </div>
          <div className={searchWindowContainer}>
            <div className="searchWindow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
