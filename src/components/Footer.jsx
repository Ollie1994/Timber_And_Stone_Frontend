import "../styles/footer.css";
import globe from "../assets/globe.png";

const Footer = () => {
  return (
    <footer className="footer-footerContainer">
      <div className="footer-left">
      <h6>&copy; Timber + Stone, Inc.</h6>
      <h6 className="footer-secondParagraph">About Contact</h6>
      </div>
      <div className="footer-right">
      <img className="footer-globe" src={globe} alt="Globe" />
      <h6>English (EN)</h6>
      </div>
    </footer>
    // Remove all {' '} elements once styling (Bootstrap) is added. Only added for better understanding of separate words
  );
};
export default Footer;