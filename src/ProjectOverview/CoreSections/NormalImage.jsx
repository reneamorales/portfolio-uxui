import "./normal-image.css";
import userflowImageDefault from "../../img/cranbelo/Userflow-mobile.png";
import userflowImageTablet from "../../img/cranbelo//Userflow-tablet.png";
import userflowImageDesktop from "../../img/cranbelo//Userflow-desktop.png";
const NormalImage = ({ imageSrc, title }) => {
  return (
    <div className="normal-image-container">
      <picture>
        <source srcset={userflowImageDefault} media="(max-width: 767px)" />
        <source
          srcset={userflowImageTablet}
          media="(min-width: 768px) and (max-width: 1024px)"
        />
        <source srcset={userflowImageDesktop} media="(min-width: 1025px)" />
        <img src={imageSrc} alt={title} className="responsive-image" />
      </picture>
    </div>
  );
};

export default NormalImage;
