import "../styles/footer.css";
import globe from "../assets/globe.png";

const Footer = () => {
  return (
    <footer className="footer-footerContainer">
      <div className="footer-left">
      <p>&copy; Timber + Stone, Inc.</p>
      <p className="footer-secondParagraph">About Contact</p>
      </div>
      <div className="footer-right">
      <img className="footer-globe" src={globe} alt="Globe" />
      <p>English (EN)</p>
      </div>
    </footer>
    // Remove all {' '} elements once styling (Bootstrap) is added. Only added for better understanding of separate words
  );
};
export default Footer;