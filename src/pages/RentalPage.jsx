import "../styles/rental.css";
import Button from "../components/Button";

const RentalPage = () => {
  return (
    <div className="full-container">
      <div className="inner-container">
        <div className="title-container">
          <div className="flex-container space"></div>
          <h2 className="rental-title">Title</h2>
          <div className="flex-container space"></div>
          <div className="address-container">
            <svg
              className="address-logo"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.4163 7.0601C15.7038 6.92326 16.0001 7.16016 16.0001 7.47848V35.1428C16.0001 35.3661 15.8505 35.5586 15.6429 35.6408C15.5071 35.6945 15.3806 35.7542 15.2601 35.82L10.5601 38.5C7.28008 40.38 4.58008 38.82 4.58008 35.02V15.56C4.58008 14.3 5.48008 12.74 6.60008 12.1L15.2601 7.13999C15.311 7.1122 15.363 7.08549 15.4163 7.0601Z"
                fill="#3C4634"
              />
              <path
                d="M29.7219 12.3423C29.8922 12.4267 30 12.6003 30 12.7904V40.2029C30 40.5714 29.615 40.8133 29.283 40.6533L19.783 36.0764C19.61 35.993 19.5 35.8179 19.5 35.6259V8.0856C19.5 7.71475 19.8896 7.47296 20.2219 7.63754L29.7219 12.3423Z"
                fill="#3C4634"
              />
              <path
                d="M44 12.98V32.44C44 33.7 43.1 35.26 41.98 35.9L34.2486 40.331C33.9153 40.522 33.5 40.2813 33.5 39.8972V12.3703C33.5 12.1908 33.5962 12.0251 33.7521 11.9361L38.02 9.50001C41.3 7.62001 44 9.18001 44 12.98Z"
                fill="#3C4634"
              />
            </svg>
            <h4 className="address-text">City, Country</h4>
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

        <div className="flex-container">
          <div className="half-container">
            <svg
              className="review-star"
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.3671 2.38535L22.2754 8.24099C22.6673 9.05081 23.7192 9.81911 24.6062 9.98522L29.8659 10.8573C33.228 11.418 34.0118 13.8682 31.5985 16.3185L27.4939 20.4506C26.8132 21.1359 26.4213 22.4856 26.6482 23.4615L27.8239 28.5696C28.7521 32.598 26.6069 34.1761 23.0798 32.0581L18.1501 29.1095C17.2632 28.5696 15.7781 28.5696 14.8911 29.1095L9.96143 32.0581C6.43431 34.1553 4.28917 32.598 5.21735 28.5696L6.39306 23.4615C6.5787 22.4648 6.1868 21.1151 5.50612 20.4299L1.40147 16.2977C-1.01182 13.8682 -0.228017 11.418 3.13409 10.8366L8.39382 9.96446C9.28076 9.81911 10.3327 9.03005 10.7246 8.22023L13.6329 2.36458C15.2212 -0.791647 17.7788 -0.791647 19.3671 2.38535Z"
                fill="#3C4634"
              />
            </svg>
            <h5>X/5</h5>
            <h5>X Reviews</h5>
          </div>
          <div className="half-container">
            <svg
              className="share-icon"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_145_870)">
                <path
                  d="M20.625 4.68748C20.6249 3.58767 21.0115 2.52282 21.7171 1.67925C22.4228 0.835678 23.4026 0.267098 24.4852 0.0729855C25.5677 -0.121126 26.6841 0.071591 27.6389 0.61742C28.5937 1.16325 29.3262 2.02743 29.7082 3.05877C30.0902 4.09012 30.0974 5.22294 29.7285 6.25905C29.3596 7.29516 28.6382 8.16858 27.6904 8.7265C26.7426 9.28441 25.6288 9.49129 24.5439 9.31095C23.4589 9.13061 22.472 8.57452 21.7556 7.73998L9.15938 13.59C9.44896 14.5077 9.44896 15.4923 9.15938 16.41L21.7556 22.26C22.5128 21.3793 23.57 20.8112 24.7222 20.6656C25.8745 20.52 27.0398 20.8073 27.9922 21.4719C28.9447 22.1365 29.6165 23.131 29.8775 24.2627C30.1385 25.3944 29.9701 26.5827 29.4049 27.5973C28.8396 28.6119 27.9179 29.3805 26.8183 29.7543C25.7186 30.128 24.5194 30.0802 23.453 29.6201C22.3866 29.1601 21.529 28.3205 21.0463 27.2641C20.5637 26.2077 20.4904 25.0098 20.8406 23.9025L8.24438 18.0525C7.62082 18.7792 6.78966 19.2975 5.86272 19.5376C4.93577 19.7778 3.9575 19.7283 3.05952 19.3959C2.16153 19.0634 1.3869 18.4639 0.839835 17.678C0.292769 16.8921 -0.000488281 15.9575 -0.000488281 15C-0.000488281 14.0424 0.292769 13.1078 0.839835 12.3219C1.3869 11.536 2.16153 10.9365 3.05952 10.6041C3.9575 10.2716 4.93577 10.2221 5.86272 10.4623C6.78966 10.7025 7.62082 11.2208 8.24438 11.9475L20.8406 6.09748C20.6972 5.64123 20.6245 5.16573 20.625 4.68748Z"
                  fill="#3C4634"
                />
              </g>
              <defs>
                <clipPath id="clip0_145_870">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h5>SHARE</h5>
            <svg
              width="30"
              height="28"
              viewBox="0 0 30 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 28C14.5368 27.9994 14.0845 27.8579 13.702 27.5939C8.03475 23.7037 5.58079 21.0365 4.22726 19.3689C1.3428 15.8142 -0.0381395 12.1647 0.000800739 8.2126C0.046231 3.68375 3.63955 0 8.01095 0C11.1896 0 13.3912 1.81052 14.6733 3.31844C14.714 3.36572 14.7641 3.40364 14.8205 3.42963C14.8768 3.45561 14.9381 3.46906 15 3.46906C15.0619 3.46906 15.1232 3.45561 15.1795 3.42963C15.2359 3.40364 15.2861 3.36572 15.3267 3.31844C16.6088 1.80906 18.8104 0 21.9891 0C26.3605 0 29.9538 3.68375 29.9992 8.21333C30.0381 12.1661 28.6558 15.8156 25.7727 19.3696C24.4192 21.0372 21.9653 23.7045 16.298 27.5946C15.9154 27.8584 15.4631 27.9996 15 28Z"
                fill="#3C4634"
              />
            </svg>
            <h5>FAVORITE</h5>
          </div>
        </div>

        <div className="images-container">
          <div className="main-image-container">
            <img
              className="rental-image"
              src="https://i.ibb.co/G4bkw1CK/getimg-ai-img-F6l1-Kz-Tkp-XJXv-Anu-GFB3-I.jpg"
              alt="Main Image of the rental"
            />
          </div>
          <div className="grid-container">
            <div className="image-flexbox">
              <img
                className="rental-grid-image"
                src="https://i.ibb.co/G4bkw1CK/getimg-ai-img-F6l1-Kz-Tkp-XJXv-Anu-GFB3-I.jpg"
                alt="Main Image of the rental"
              />
              <img
                className="rental-grid-image"
                src="https://i.ibb.co/G4bkw1CK/getimg-ai-img-F6l1-Kz-Tkp-XJXv-Anu-GFB3-I.jpg"
                alt="Main Image of the rental"
              />
            </div>
            <div className="image-flexbox">
              <img
                className="rental-grid-image"
                src="https://i.ibb.co/G4bkw1CK/getimg-ai-img-F6l1-Kz-Tkp-XJXv-Anu-GFB3-I.jpg"
                alt="Main Image of the rental"
              />
              <img
                className="rental-grid-image"
                src="https://i.ibb.co/G4bkw1CK/getimg-ai-img-F6l1-Kz-Tkp-XJXv-Anu-GFB3-I.jpg"
                alt="Main Image of the rental"
              />
            </div>
          </div>
        </div>

        <div className="flex-container">
          <div className="half-container vertical left">
            <div className="half-container">
              <h3>hosted by:</h3>
              <h3 className="host-name">HostUserName</h3>
            </div>
            <div className="half-container">
              <svg
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 19.625C11.9875 19.625 11.5625 20.05 11.5625 20.5625V22.4375C11.5625 22.95 11.9875 23.375 12.5 23.375C13.0125 23.375 13.4375 22.95 13.4375 22.4375V20.5625C13.4375 20.05 13.0125 19.625 12.5 19.625Z"
                  fill="#3C4634"
                />
                <path
                  d="M27.5 26.8125H26.25V12.725C26.25 11.95 25.9 11.225 25.2875 10.75L16.5375 3.95002C15.6375 3.23752 14.3625 3.23752 13.4625 3.95002L4.7125 10.75C4.1 11.225 3.75 11.95 3.75 12.7125L3.6875 26.8125H2.5C1.9875 26.8125 1.5625 27.225 1.5625 27.75C1.5625 28.2625 1.9875 28.6875 2.5 28.6875H27.5C28.0125 28.6875 28.4375 28.2625 28.4375 27.75C28.4375 27.225 28.0125 26.8125 27.5 26.8125ZM13.125 8.68752H16.875C17.3875 8.68752 17.8125 9.11252 17.8125 9.62502C17.8125 10.1375 17.3875 10.5625 16.875 10.5625H13.125C12.6125 10.5625 12.1875 10.1375 12.1875 9.62502C12.1875 9.11252 12.6125 8.68752 13.125 8.68752ZM21.25 26.8125H8.75V15.875C8.75 14.8375 9.5875 14 10.625 14H19.375C20.4125 14 21.25 14.8375 21.25 15.875V26.8125Z"
                  fill="#3C4634"
                />
              </svg>
              <h4>CATEGORY</h4>
              <h4>-</h4>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.955 0.527857C6.67506 0.557301 -0.0298995 7.16755 0.000100279 15.2942C0.0301001 23.4208 6.76505 30.0016 15.045 29.9722C23.3249 29.9427 30.0299 23.3325 29.9999 15.2058C29.9699 7.07922 23.2349 0.513135 14.955 0.527857ZM18.39 15.3972C19.56 15.7947 21.135 16.6486 21.135 19.2839C21.135 21.5511 19.32 23.3766 17.1 23.3766H16.125V24.2305C16.125 24.8341 15.615 25.3347 15 25.3347C14.385 25.3347 13.875 24.8341 13.875 24.2305V23.3766H13.335C10.875 23.3766 8.88004 21.345 8.88004 18.8422C8.88004 18.2386 9.39004 17.7381 10.005 17.7381C10.62 17.7381 11.13 18.2386 11.13 18.8422C11.13 20.1231 12.12 21.1683 13.335 21.1683H13.875V16.1922L11.61 15.3972C10.44 14.9997 8.86504 14.1459 8.86504 11.5106C8.86504 9.24337 10.68 7.41783 12.9 7.41783H13.875V6.56394C13.875 5.96033 14.385 5.45978 15 5.45978C15.615 5.45978 16.125 5.96033 16.125 6.56394V7.41783H16.665C19.125 7.41783 21.12 9.44948 21.12 11.9523C21.12 12.5559 20.61 13.0564 19.995 13.0564C19.38 13.0564 18.87 12.5559 18.87 11.9523C18.87 10.6714 17.88 9.62615 16.665 9.62615H16.125V14.6022L18.39 15.3972Z"
                  fill="#3C4634"
                />
              </svg>
              <h4>£100/night</h4>
              <h4>-</h4>
              <svg
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.9126 9.9625C21.8251 9.95 21.7375 9.95 21.65 9.9625C19.7125 9.9 18.175 8.3125 18.175 6.3625C18.175 4.375 19.7875 2.75 21.7875 2.75C23.775 2.75 25.4 4.3625 25.4 6.3625C25.3875 8.3125 23.8501 9.9 21.9126 9.9625Z"
                  fill="#3C4634"
                />
                <path
                  d="M25.9875 18.625C24.5875 19.5625 22.625 19.9125 20.8125 19.675C21.2875 18.65 21.5375 17.5125 21.55 16.3125C21.55 15.0625 21.275 13.875 20.75 12.8375C22.6 12.5875 24.5625 12.9375 25.975 13.875C27.95 15.175 27.95 17.3125 25.9875 18.625Z"
                  fill="#3C4634"
                />
                <path
                  d="M8.04995 9.9625C8.13745 9.95 8.22495 9.95 8.31245 9.9625C10.25 9.9 11.7875 8.3125 11.7875 6.3625C11.7875 4.3625 10.175 2.75 8.17495 2.75C6.18745 2.75 4.57495 4.3625 4.57495 6.3625C4.57495 8.3125 6.11245 9.9 8.04995 9.9625Z"
                  fill="#3C4634"
                />
                <path
                  d="M8.18753 16.3125C8.18753 17.525 8.45002 18.675 8.92503 19.7125C7.16252 19.9 5.32502 19.525 3.97502 18.6375C2.00002 17.325 2.00002 15.1875 3.97502 13.875C5.31252 12.975 7.20002 12.6125 8.97502 12.8125C8.46252 13.8625 8.18753 15.05 8.18753 16.3125Z"
                  fill="#3C4634"
                />
                <path
                  d="M15.15 20.0875C15.05 20.075 14.9375 20.075 14.825 20.0875C12.525 20.0125 10.6875 18.125 10.6875 15.8C10.7 13.425 12.6125 11.5 15 11.5C17.375 11.5 19.3 13.425 19.3 15.8C19.2875 18.125 17.4625 20.0125 15.15 20.0875Z"
                  fill="#3C4634"
                />
                <path
                  d="M11.0875 22.675C9.2 23.9375 9.2 26.0125 11.0875 27.2625C13.2375 28.7 16.7625 28.7 18.9125 27.2625C20.8 26 20.8 23.925 18.9125 22.675C16.775 21.2375 13.25 21.2375 11.0875 22.675Z"
                  fill="#3C4634"
                />
              </svg>
              <h4>2 guests</h4>
              <h4>-</h4>
              <svg
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.9375 4.7V2.75C20.9375 2.2375 20.5125 1.8125 20 1.8125C19.4875 1.8125 19.0625 2.2375 19.0625 2.75V4.625H10.9375V2.75C10.9375 2.2375 10.5125 1.8125 10 1.8125C9.48754 1.8125 9.06254 2.2375 9.06254 2.75V4.7C5.68754 5.0125 4.05004 7.025 3.80004 10.0125C3.77504 10.375 4.07504 10.675 4.42504 10.675H25.575C25.9375 10.675 26.2375 10.3625 26.2 10.0125C25.95 7.025 24.3125 5.0125 20.9375 4.7Z"
                  fill="#3C4634"
                />
                <path
                  d="M23.75 19C20.9875 19 18.75 21.2375 18.75 24C18.75 24.9375 19.0125 25.825 19.475 26.575C20.3375 28.025 21.925 29 23.75 29C25.575 29 27.1625 28.025 28.025 26.575C28.4875 25.825 28.75 24.9375 28.75 24C28.75 21.2375 26.5125 19 23.75 19ZM26.3375 23.4625L23.675 25.925C23.5 26.0875 23.2625 26.175 23.0375 26.175C22.8 26.175 22.5625 26.0875 22.375 25.9L21.1375 24.6625C20.775 24.3 20.775 23.7 21.1375 23.3375C21.5 22.975 22.1 22.975 22.4625 23.3375L23.0625 23.9375L25.0625 22.0875C25.4375 21.7375 26.0375 21.7625 26.3875 22.1375C26.7375 22.5125 26.7125 23.1 26.3375 23.4625Z"
                  fill="#3C4634"
                />
                <path
                  d="M25 12.55H5C4.3125 12.55 3.75 13.1125 3.75 13.8V21.5C3.75 25.25 5.625 27.75 10 27.75H16.1625C17.025 27.75 17.625 26.9125 17.35 26.1C17.1 25.375 16.8875 24.575 16.8875 24C16.8875 20.2125 19.975 17.125 23.7625 17.125C24.125 17.125 24.4875 17.15 24.8375 17.2125C25.5875 17.325 26.2625 16.7375 26.2625 15.9875V13.8125C26.25 13.1125 25.6875 12.55 25 12.55ZM11.5125 23.0125C11.275 23.2375 10.95 23.375 10.625 23.375C10.3 23.375 9.975 23.2375 9.7375 23.0125C9.5125 22.775 9.375 22.45 9.375 22.125C9.375 21.8 9.5125 21.475 9.7375 21.2375C9.8625 21.125 9.9875 21.0375 10.15 20.975C10.6125 20.775 11.1625 20.8875 11.5125 21.2375C11.7375 21.475 11.875 21.8 11.875 22.125C11.875 22.45 11.7375 22.775 11.5125 23.0125ZM11.5125 18.6375C11.45 18.6875 11.3875 18.7375 11.325 18.7875C11.25 18.8375 11.175 18.875 11.1 18.9C11.025 18.9375 10.95 18.9625 10.875 18.975C10.7875 18.9875 10.7 19 10.625 19C10.3 19 9.975 18.8625 9.7375 18.6375C9.5125 18.4 9.375 18.075 9.375 17.75C9.375 17.425 9.5125 17.1 9.7375 16.8625C10.025 16.575 10.4625 16.4375 10.875 16.525C10.95 16.5375 11.025 16.5625 11.1 16.6C11.175 16.625 11.25 16.6625 11.325 16.7125C11.3875 16.7625 11.45 16.8125 11.5125 16.8625C11.7375 17.1 11.875 17.425 11.875 17.75C11.875 18.075 11.7375 18.4 11.5125 18.6375ZM15.8875 18.6375C15.65 18.8625 15.325 19 15 19C14.675 19 14.35 18.8625 14.1125 18.6375C13.8875 18.4 13.75 18.075 13.75 17.75C13.75 17.425 13.8875 17.1 14.1125 16.8625C14.5875 16.4 15.425 16.4 15.8875 16.8625C16.1125 17.1 16.25 17.425 16.25 17.75C16.25 18.075 16.1125 18.4 15.8875 18.6375Z"
                  fill="#3C4634"
                />
              </svg>
              <h4>Available next: </h4>
              <h4>01/01/26</h4>
            </div>
          </div>
          <div className="half-container">
            <img
              className="host-image"
              src="https://i.ibb.co/G4bkw1CK/getimg-ai-img-F6l1-Kz-Tkp-XJXv-Anu-GFB3-I.jpg"
              alt="Profile image of the host"
            />
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

        <div className="flex-container">
          <div className="half-container vertical left">
            <div className="inset">
              <div className="half-container">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.2566 2.83331H7.56492C4.46242 2.83331 2.83325 4.46248 2.83325 7.55081V10.2425C2.83325 13.3308 4.46242 14.96 7.55075 14.96H10.2424C13.3308 14.96 14.9599 13.3308 14.9599 10.2425V7.55081C14.9741 4.46248 13.3449 2.83331 10.2566 2.83331Z"
                    fill="#3C4634"
                  />
                  <path
                    d="M26.4492 2.83331H23.7575C20.6692 2.83331 19.04 4.46248 19.04 7.55081V10.2425C19.04 13.3308 20.6692 14.96 23.7575 14.96H26.4492C29.5375 14.96 31.1667 13.3308 31.1667 10.2425V7.55081C31.1667 4.46248 29.5375 2.83331 26.4492 2.83331Z"
                    fill="#3C4634"
                  />
                  <path
                    d="M26.4492 19.0258H23.7575C20.6692 19.0258 19.04 20.655 19.04 23.7433V26.435C19.04 29.5233 20.6692 31.1525 23.7575 31.1525H26.4492C29.5375 31.1525 31.1667 29.5233 31.1667 26.435V23.7433C31.1667 20.655 29.5375 19.0258 26.4492 19.0258Z"
                    fill="#3C4634"
                  />
                  <path
                    d="M10.2566 19.0258H7.56492C4.46242 19.0258 2.83325 20.655 2.83325 23.7433V26.435C2.83325 29.5375 4.46242 31.1667 7.55075 31.1667H10.2424C13.3308 31.1667 14.9599 29.5375 14.9599 26.4492V23.7575C14.9741 20.655 13.3449 19.0258 10.2566 19.0258Z"
                    fill="#3C4634"
                  />
                </svg>
                <h2>What this place offers:</h2>
              </div>

              <div className="amenities-container">
                <div className="half-container vertical">
                  <div className="amenity">
                    <div className="half-container">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.33325 17.3333C6.33325 9.86665 25.6666 6.33331 25.6666 6.33331C25.6666 6.33331 24.3333 25.6666 15.9999 25.6666C10.6666 25.6666 6.33325 22.6666 6.33325 17.3333Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.33325 25.6667C6.33325 25.6667 10.6666 18.6667 16.3333 15.6667"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="amenity-description">
                        <h4>Garden</h4>
                        <h5>quiet forest scenery</h5>
                      </div>
                    </div>
                  </div>
                  <div className="amenity">
                    <div className="half-container">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.33325 17.3333C6.33325 9.86665 25.6666 6.33331 25.6666 6.33331C25.6666 6.33331 24.3333 25.6666 15.9999 25.6666C10.6666 25.6666 6.33325 22.6666 6.33325 17.3333Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.33325 25.6667C6.33325 25.6667 10.6666 18.6667 16.3333 15.6667"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="amenity-description">
                        <h4>Garden</h4>
                        <h5>quiet forest scenery</h5>
                      </div>
                    </div>
                  </div>
                  <div className="amenity">
                    <div className="half-container">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.33325 17.3333C6.33325 9.86665 25.6666 6.33331 25.6666 6.33331C25.6666 6.33331 24.3333 25.6666 15.9999 25.6666C10.6666 25.6666 6.33325 22.6666 6.33325 17.3333Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.33325 25.6667C6.33325 25.6667 10.6666 18.6667 16.3333 15.6667"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="amenity-description">
                        <h4>Garden</h4>
                        <h5>quiet forest scenery</h5>
                      </div>
                    </div>
                  </div>
                  <div className="amenity">
                    <div className="half-container">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.33325 17.3333C6.33325 9.86665 25.6666 6.33331 25.6666 6.33331C25.6666 6.33331 24.3333 25.6666 15.9999 25.6666C10.6666 25.6666 6.33325 22.6666 6.33325 17.3333Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.33325 25.6667C6.33325 25.6667 10.6666 18.6667 16.3333 15.6667"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="amenity-description">
                        <h4>Garden</h4>
                        <h5>quiet forest scenery</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="half-container vertical">
                  <div className="amenity">
                    <div className="half-container">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.33325 17.3333C6.33325 9.86665 25.6666 6.33331 25.6666 6.33331C25.6666 6.33331 24.3333 25.6666 15.9999 25.6666C10.6666 25.6666 6.33325 22.6666 6.33325 17.3333Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.33325 25.6667C6.33325 25.6667 10.6666 18.6667 16.3333 15.6667"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="amenity-description">
                        <h4>Garden</h4>
                        <h5>quiet forest scenery</h5>
                      </div>
                    </div>
                  </div>
                  <div className="amenity">
                    <div className="half-container">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.33325 17.3333C6.33325 9.86665 25.6666 6.33331 25.6666 6.33331C25.6666 6.33331 24.3333 25.6666 15.9999 25.6666C10.6666 25.6666 6.33325 22.6666 6.33325 17.3333Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.33325 25.6667C6.33325 25.6667 10.6666 18.6667 16.3333 15.6667"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="amenity-description">
                        <h4>Garden</h4>
                        <h5>quiet forest scenery</h5>
                      </div>
                    </div>
                  </div>
                  <div className="amenity">
                    <div className="half-container">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.33325 17.3333C6.33325 9.86665 25.6666 6.33331 25.6666 6.33331C25.6666 6.33331 24.3333 25.6666 15.9999 25.6666C10.6666 25.6666 6.33325 22.6666 6.33325 17.3333Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.33325 25.6667C6.33325 25.6667 10.6666 18.6667 16.3333 15.6667"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="amenity-description">
                        <h4>Garden</h4>
                        <h5>quiet forest scenery</h5>
                      </div>
                    </div>
                  </div>
                  <div className="amenity">
                    <div className="half-container">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.33325 17.3333C6.33325 9.86665 25.6666 6.33331 25.6666 6.33331C25.6666 6.33331 24.3333 25.6666 15.9999 25.6666C10.6666 25.6666 6.33325 22.6666 6.33325 17.3333Z"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.33325 25.6667C6.33325 25.6667 10.6666 18.6667 16.3333 15.6667"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="amenity-description">
                        <h4>Garden</h4>
                        <h5>quiet forest scenery</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-container space"></div>

            <div className="reviews-container vertical left">
              <div className="half-container reviews-top">
                <h3>Latest Reviews:</h3>
                <Button>
                  <h4>Show More...</h4>
                </Button>
              </div>

              <div className="flex-container review-container vertical">
                <div className="review">
                  <div className="half-container">
                    <h3>UserName</h3>
                    <h3>-</h3>
                    <h3>5/5</h3>
                    <h3>-</h3>
                    <h3>01/01/25</h3>
                  </div>
                  <div className="half-container">
                    <p>
                      Absolutely magical. Waking up with the forest wrapped
                      around you is something I’ll never forget. The
                      craftsmanship of the treehouse is unreal—you can feel the
                      love Fritz poured into it. Every detail feels intentional,
                      from the curved birch walls to the way the light moves
                      through the space. If you’re looking to slow down and
                      reconnect, this is it.
                    </p>
                  </div>
                </div>
                <div className="review">
                  <div className="half-container">
                    <h3>UserName</h3>
                    <h3>-</h3>
                    <h3>5/5</h3>
                    <h3>-</h3>
                    <h3>01/01/25</h3>
                  </div>
                  <div className="half-container">
                    <p>
                      Absolutely magical. Waking up with the forest wrapped
                      around you is something I’ll never forget. The
                      craftsmanship of the treehouse is unreal—you can feel the
                      love Fritz poured into it. Every detail feels intentional,
                      from the curved birch walls to the way the light moves
                      through the space. If you’re looking to slow down and
                      reconnect, this is it.
                    </p>
                  </div>
                </div>
                <div className="review">
                  <div className="half-container">
                    <h3>UserName</h3>
                    <h3>-</h3>
                    <h3>5/5</h3>
                    <h3>-</h3>
                    <h3>01/01/25</h3>
                  </div>
                  <div className="half-container">
                    <p>
                      Absolutely magical. Waking up with the forest wrapped
                      around you is something I’ll never forget. The
                      craftsmanship of the treehouse is unreal—you can feel the
                      love Fritz poured into it. Every detail feels intentional,
                      from the curved birch walls to the way the light moves
                      through the space. If you’re looking to slow down and
                      reconnect, this is it.
                    </p>
                  </div>
                </div>
                <div className="review">
                  <div className="half-container">
                    <h3>UserName</h3>
                    <h3>-</h3>
                    <h3>5/5</h3>
                    <h3>-</h3>
                    <h3>01/01/25</h3>
                  </div>
                  <div className="half-container">
                    <p>
                      Absolutely magical. Waking up with the forest wrapped
                      around you is something I’ll never forget. The
                      craftsmanship of the treehouse is unreal—you can feel the
                      love Fritz poured into it. Every detail feels intentional,
                      from the curved birch walls to the way the light moves
                      through the space. If you’re looking to slow down and
                      reconnect, this is it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-container">
            <div className="inner-form-container">
              <h2>£100/night</h2>
              <div className="booking-form">
                <div className="input-container">
                  <div className="date-inputs">
                    <div className="start-date">
                      <h5>CHECK-IN</h5>
                      <input type="date" defaultValue="2026-01-01" />
                    </div>
                    <div className="end-date">
                      <h5>CHECK-OUT</h5>
                      <input type="date" defaultValue="2026-01-02" />
                    </div>
                  </div>
                  <div className="guests-input">
                    <h5>GUESTS:</h5>
                    <input
                      type="number"
                      placeholder="Amount of guests (max 2)"
                    />
                  </div>
                </div>
                <label className="policy-container">
                  <input type="checkbox" />
                  <h5>I accept the</h5>
                  <h5 className="policy">
                    <strong>Policy</strong>
                  </h5>
                </label>
                <Button>
                  <h4>RESERVE</h4>
                </Button>
                <h4>You won't be charged yet.</h4>
                <div className="booking-summary vertical">
                  <div className="flex-container">
                    <div className="fee">
                      <h3>£100</h3>
                      <h3>x</h3>
                      <h3>10</h3>
                      <h3>nights</h3>
                    </div>
                    <div className="sum">
                      <h3>£1000</h3>
                    </div>
                  </div>
                  <div className="flex-container">
                    <div className="fee">
                      <h3>Discount:</h3>
                    </div>
                    <div className="sum">
                      <h3>-</h3>
                      <h3>£10</h3>
                    </div>
                  </div>
                  <div className="flex-container">
                    <div className="fee">
                      <h3>Cleaning fee</h3>
                    </div>
                    <div className="sum">
                      <h3>£50</h3>
                    </div>
                  </div>
                  <div className="flex-container">
                    <div className="fee">
                      <h3>Service Fee</h3>
                    </div>
                    <div className="sum">
                      <h3>£30</h3>
                    </div>
                  </div>
                  <div className="flex-container">
                    <div className="fee">
                      <h3>Occupancy taxes and fees</h3>
                    </div>
                    <div className="sum">
                      <h3>£20</h3>
                    </div>
                  </div>
                  <div className="flex-container">
                    <div className="fee">
                      <h3>
                        <strong>Total:</strong>
                      </h3>
                    </div>
                    <div className="sum">
                      <h3>
                        <strong>£1090</strong>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RentalPage;
