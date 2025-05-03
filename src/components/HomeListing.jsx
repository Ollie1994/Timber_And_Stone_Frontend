import "../styles/home.css";

const HomeListing = ({image, altText, imageClass, location, title, description}) => {
    return (
        <div className="col">
          <img className={imageClass} src={image} alt={altText} /> 
          <div style={{ flexGrow: 1 }} />
          <div className="col-text">
          <div className="col-location">{location}</div>
        <div className="col-title">{title}</div>
        <div className="col-description">{description}</div>
          </div>
        </div>
    );
};

export default HomeListing;