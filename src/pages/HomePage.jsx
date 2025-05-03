import "../styles/home.css";
import IMG_1 from "../assets/IMG_1.png";
import IMG_2 from "../assets/IMG_2.png";
import IMG_3 from "../assets/IMG_3.png";
import IMG_4 from "../assets/IMG_4.png";
import IMG_5 from "../assets/IMG_5.png";
import IMG_6 from "../assets/IMG_6.png";
// To check for logged in user
import { useAuth } from "../hooks/useAuth";

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
        <div className="col">
          <img className="IMG_1" src={IMG_1} alt="Rental 1" />
          <div style={{ flexGrow: 1 }} />
          <div className="col-text">
            <div className="col-location">Lake Bled, Slovenia</div>
            <div className="col-title">Hush Cabin</div>
            <div className="col-description">Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. {" "}</div>
          </div>
        </div>
        <div className="col">
          <img className="IMG_2" src={IMG_2} alt="Rental 2" />
          <div style={{ flexGrow: 1 }} />
          <div className="col-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.{" "}
          </div>
        </div>
        <div className="col">
          <img className="IMG_3" src={IMG_3} alt="Rental 3" />
          <div style={{ flexGrow: 1 }} />
          <div className="col-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.{" "}
          </div>
        </div>
        <div className="col">
          <img className="IMG_4" src={IMG_4} alt="Rental 4" />
          <div style={{ flexGrow: 1 }} />
          <div className="col-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.{" "}
          </div>
        </div>
        <div className="col">
          <img className="IMG_5" src={IMG_5} alt="Rental 5" />
          <div style={{ flexGrow: 1 }} />
          <div className="col-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.{" "}
          </div>
        </div>
        <div className="col">
          <img className="IMG_6" src={IMG_6} alt="Rental 6" />
          <div style={{ flexGrow: 1 }} />
          <div className="col-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
