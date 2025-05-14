// https://chatgpt.com/share/6821027e-ff24-800b-aede-ef5d2aaeba7d
// https://medium.com/@ozhanli/passing-data-from-child-to-parent-components-in-react-e347ea60b1bb

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
import Button from "../components/Button";
import { useState, useEffect } from "react";

const SearchBar = ({ sendDataToParent }) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  /* const [searchState, setSearchState] = useState({}); */
  const searchStateObject = {
    state: "price",
    newMinPrice: minPrice,
    newMaxPrice: maxPrice,
  };

  const handleClick = () => {
/*     setSearchState(searchStateObject);
 */    sendDataToParent(searchStateObject);
    console.log("? : " + searchStateObject.newMinPrice + "-" + searchStateObject.newMaxPrice);
  };

  const minPriceChange = (e) => {
    const newMinPrice = e.target.value;
    setMinPrice(newMinPrice);
  };

  const maxPriceChange = (e) => {
    const newMaxPrice = e.target.value;
    setMaxPrice(newMaxPrice);
  };

  const searchForRentalsByPricerange = () => {
    console.log(minPrice + "-" + maxPrice);
  };

  /*Window states*/
  const [categoryArrowContainer, setCategoryArrowContainer] =
    useState("searchBar-arrowContainerNone");
  const [categoryWindowContainer, setCategoryWindowContainer] = useState(
    "searchBar-windowContainerNone"
  );
  const [dollarArrowContainer, setDollarArrowContainer] =
    useState("searchBar-arrowContainerNone");
  const [dollarWindowContainer, setDollarWindowContainer] = useState(
    "searchBar-windowContainerNone"
  );
  const [calendarArrowContainer, setCalendarArrowContainer] =
    useState("searchBar-arrowContainerNone");
  const [calendarWindowContainer, setCalendarWindowContainer] = useState(
    "searchBar-windowContainerNone"
  );
  const [ratingArrowContainer, setRatingArrowContainer] =
    useState("searchBar-arrowContainerNone");
  const [ratingWindowContainer, setRatingWindowContainer] = useState(
    "searchBar-windowContainerNone"
  );
  const [locationArrowContainer, setLocationArrowContainer] =
    useState("searchBar-arrowContainerNone");
  const [locationWindowContainer, setLocationWindowContainer] = useState(
    "searchBar-windowContainerNone"
  );
  const [guestsArrowContainer, setGuestsArrowContainer] =
    useState("searchBar-arrowContainerNone");
  const [guestsWindowContainer, setGuestsWindowContainer] = useState(
    "searchBar-windowContainerNone"
  );
  const [amenitiesArrowContainer, setAmenitiesArrowContainer] =
    useState("searchBar-arrowContainerNone");
  const [amenitiesWindowContainer, setAmenitiesWindowContainer] = useState(
    "searchBar-windowContainerNone"
  );
  const [searchArrowContainer, setSearchArrowContainer] =
    useState("searchBar-arrowContainerNone");
  const [searchWindowContainer, setSearchWindowContainer] = useState(
    "searchBar-windowContainerNone"
  );

  // handles the states of the searchAndFilter popups
  function handleButtonClick(arrow, window, state) {
    if (
      categoryArrowContainer === "searchBar-categoryArrowContainer" ||
      dollarArrowContainer === "searchBar-dollarArrowContainer" ||
      calendarArrowContainer === "searchBar-calendarArrowContainer" ||
      ratingArrowContainer === "searchBar-ratingArrowContainer" ||
      locationArrowContainer === "searchBar-locationArrowContainer" ||
      guestsArrowContainer === "searchBar-guestsArrowContainer" ||
      amenitiesArrowContainer === "searchBar-amenitiesArrowContainer" ||
      searchArrowContainer === "searchBar-searchArrowContainer"
    ) {
      setCategoryArrowContainer("searchBar-arrowContainerNone");
      setCategoryWindowContainer("searchBar-windowContainerNone");
      setDollarArrowContainer("searchBar-arrowContainerNone");
      setDollarWindowContainer("searchBar-windowContainerNone");
      setCalendarArrowContainer("searchBar-arrowContainerNone");
      setCalendarWindowContainer("searchBar-windowContainerNone");
      setRatingArrowContainer("searchBar-arrowContainerNone");
      setRatingWindowContainer("searchBar-arrowContainerNone");
      setLocationArrowContainer("searchBar-arrowContainerNone");
      setLocationWindowContainer("searchBar-arrowContainerNone");
      setGuestsArrowContainer("searchBar-arrowContainerNone");
      setGuestsWindowContainer("searchBar-arrowContainerNone");
      setAmenitiesArrowContainer("searchBar-arrowContainerNone");
      setAmenitiesWindowContainer("searchBar-arrowContainerNone");
      setSearchArrowContainer("searchBar-arrowContainerNone");
      setSearchWindowContainer("searchBar-arrowContainerNone");
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
      <div className="searchBar-iconsContainer">
        <div className="searchBar-iconContainer">
          <div
            onClick={() =>
              handleButtonClick(
                "searchBar-categoryArrowContainer",
                "searchBar-categoryWindowContainer",
                "category"
              )
            }
          >
            <div className="searchBar-iconFlex">
              <img className="searchBar-img" src={categoryIcon} alt=""></img>
            </div>
          </div>
          <div className={categoryArrowContainer}>
            <img className="searchBar-arrow" src={arrowIcon} alt="arrow Icon"></img>
          </div>
          <div className={categoryWindowContainer}>
            <div className="searchBar-categoryWindow"></div>
          </div>
        </div>
        <div className="searchBar-iconContainer">
          <div
            onClick={() =>
              handleButtonClick(
                "searchBar-dollarArrowContainer",
                "searchBar-dollarWindowContainer",
                "dollar"
              )
            }
          >
            <div className="searchBar-iconFlex">
              <img className="searchBar-img" src={dollarIcon} alt=""></img>
            </div>
          </div>
          <div className={dollarArrowContainer}>
            <img className="searchBar-arrow" src={arrowIcon} alt="arrow Icon"></img>
          </div>
          <div className={dollarWindowContainer}>
            <div className="searchBar-dollarWindow">
              <div className="searchBar-minPriceContainer">
                <input
                  className="searchBar-minPrice"
                  type="number"
                  value={minPrice}
                  onChange={minPriceChange}
                  placeholder="min-price..."
                />
              </div>
              <div className="searchBar-maxPriceContainer">
                <input
                  className="searchBar-maxPrice"
                  type="number"
                  value={maxPrice}
                  onChange={maxPriceChange}
                  placeholder="max-price..."
                />
              </div>
              <div className="searchBar-buttonContainer">
                <button className="searchBar-button" onClick={handleClick}>
                  <h4>Search</h4>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="searchBar-iconContainer">
          <div
            onClick={() =>
              handleButtonClick(
                "searchBar-calendarArrowContainer",
                "searchBar-calendarWindowContainer",
                "calendar"
              )
            }
          >
            <div className="searchBar-iconFlex">
              <img className="searchBar-img" src={calendarIcon} alt=""></img>
            </div>
          </div>
          <div className={calendarArrowContainer}>
            <img className="searchBar-arrow" src={arrowIcon} alt="arrow Icon"></img>
          </div>
          <div className={calendarWindowContainer}>
            <div className="searchBar-calendarWindow"></div>
          </div>
        </div>
        <div className="searchBar-iconContainer">
          <div
            onClick={() =>
              handleButtonClick(
                "searchBar-ratingArrowContainer",
                "searchBar-ratingWindowContainer",
                "rating"
              )
            }
          >
            <div className="searchBar-iconFlex">
              <img className="searchBar-img" src={ratingIcon} alt=""></img>
            </div>
          </div>
          <div className={ratingArrowContainer}>
            <img className="searchBar-arrow" src={arrowIcon} alt="arrow Icon"></img>
          </div>
          <div className={ratingWindowContainer}>
            <div className="searchBar-ratingWindow"></div>
          </div>
        </div>
        <div className="searchBar-iconContainer">
          <div
            onClick={() =>
              handleButtonClick(
                "searchBar-locationArrowContainer",
                "searchBar-locationWindowContainer",
                "location"
              )
            }
          >
            <div className="searchBar-iconFlex">
              <img className="searchBar-img" src={locationIcon} alt=""></img>
            </div>
          </div>
          <div className={locationArrowContainer}>
            <img className="searchBar-arrow" src={arrowIcon} alt="arrow Icon"></img>
          </div>
          <div className={locationWindowContainer}>
            <div className="searchBar-locationWindow"></div>
          </div>
        </div>
        <div className="searchBar-iconContainer">
          <div
            onClick={() =>
              handleButtonClick(
                "searchBar-guestsArrowContainer",
                "searchBar-guestsWindowContainer",
                "guests"
              )
            }
          >
            <div className="searchBar-iconFlex">
              <img className="searchBar-img" src={guestIcon} alt=""></img>
            </div>
          </div>
          <div className={guestsArrowContainer}>
            <img className="searchBar-arrow" src={arrowIcon} alt="arrow Icon"></img>
          </div>
          <div className={guestsWindowContainer}>
            <div className="searchBar-guestsWindow"></div>
          </div>
        </div>
        <div className="searchBar-iconContainer">
          <div
            onClick={() =>
              handleButtonClick(
                "searchBar-amenitiesArrowContainer",
                "searchBar-amenitiesWindowContainer",
                "amenities"
              )
            }
          >
            <div className="searchBar-iconFlex">
              <img className="searchBar-img" src={amenityIcon} alt=""></img>
            </div>
          </div>
          <div className={amenitiesArrowContainer}>
            <img className="searchBar-arrow" src={arrowIcon} alt="arrow Icon"></img>
          </div>
          <div className={amenitiesWindowContainer}>
            <div className="searchBar-amenitiesWindow"></div>
          </div>
        </div>
        <div className="searchBar-iconContainer">
          <div
            onClick={() =>
              handleButtonClick(
                "searchBar-searchArrowContainer",
                "searchBar-searchWindowContainer",
                "search"
              )
            }
          >
            <div className="searchBar-iconFlex">
              <img className="searchBar-img" src={searchIcon} alt=""></img>
            </div>
          </div>
          <div className={searchArrowContainer}>
            <img className="searchBar-arrow" src={arrowIcon} alt="arrow Icon"></img>
          </div>
          <div className={searchWindowContainer}>
            <div className="searchBar-searchWindow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
