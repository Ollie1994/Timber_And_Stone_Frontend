import "../styles/footer.css";
import globe from "../assets/globe.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
      <p>&copy; Timber + Stone, Inc.</p>
      <p className="second-paragraph">About Contact</p>
      </div>
      <div className="footer-right">
      <img className="globe" src={globe} alt="Globe" />
      <p>English (EN)</p>
      </div>
    </footer>
    // Remove all {' '} elements once styling (Bootstrap) is added. Only added for better understanding of separate words
  );
};
export default Footer;
