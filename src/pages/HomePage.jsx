import "../styles/home.css";
import IMG_1 from "../assets/IMG_1.png";
import IMG_2 from "../assets/IMG_2.png";
import IMG_3 from "../assets/IMG_3.png";
import IMG_4 from "../assets/IMG_4.png";
import IMG_5 from "../assets/IMG_5.png";
import IMG_6 from "../assets/IMG_6.png";
// To check for logged in user
import { useAuth } from "../hooks/useAuth";
import HomeListing from "../components/HomeListing";

const HomePage = () => {
  // const for logged in user
  const { isLoggedIn } = useAuth();

  return (
    <div className="home-container">
      <div>
        <div className="home-text">
        {isLoggedIn ? (
        <h2>Welcome back!</h2>
        ) : (
        <h2>Your Dream Getaway starts here</h2>
         )}
          <br />
          <article>
            Explore our cabins, cottages + off-grid retreats to start your next
            <br />
            adventure or find your favorite hideaway. <br />
            See our handpicked recommendations below or use the searchbar
            <br />
            above to find just what you're looking for!
          </article>
          <br />
          </div>
        </div>
      <div className="flex-grid">
      <HomeListing
  image={IMG_1}
  altText="Rental 1"
  imageClass="IMG_1"
  location="Lake Bled, Slovenia"
  title="Hush Cabin"
  description="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry."/>
        <HomeListing
  image={IMG_2}
  altText="Rental 2"
  imageClass="IMG_2"
  location="Abisko, Sweden"
  title="Midnight Sun Lodge"
  description="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry."/>
        <HomeListing
  image={IMG_3}
  altText="Rental 3"
  imageClass="IMG_3"
  location="Bavaria, Germany"
  title="Birch and Sky Treehouse"
  description="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry."/>
        <HomeListing
  image={IMG_4}
  altText="Rental 4"
  imageClass="IMG_4"
  location="Kawartha Lakes, Canada"
  title="Lakewind Lookout"
  description="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry."/>
        <HomeListing
  image={IMG_5}
  altText="Rental 5"
  imageClass="IMG_5"
  location="Cotswolds, England"
  title="Foxglove Hollow"
  description="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry."/>
        <HomeListing
  image={IMG_6}
  altText="Rental 6"
  imageClass="IMG_6"
  location="Queenstown, New Zealand"
  title="The Stargazer's Nest"
  description="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry."/>
        </div>
      </div>
  );
};
export default HomePage;
