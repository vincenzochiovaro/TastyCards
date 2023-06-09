import { Button } from "react-bootstrap";
import popupImage from "../images/popupImage.gif";
import "../styles/popupWindow.css";

type onCloseProps = {
  onClose: () => void;
};

const PopupWindow = ({ onClose }: onCloseProps) => {
  return (
    <div className="popup-window">
      <div className="popup-content">
        <img src={popupImage} alt="Popup Image" className="popup-image" />
        <h2 className="popup-title">What's Tasty Cards?</h2>

        <p className="popup-text">
          Tasty Cards is designed to solve the problem of deciding which recipe
          to prepare when you're feeling indecisive. I understand that sometimes
          it can be challenging to come up with ideas, so I created a random
          recipe generator to give you some inspiration!
        </p>

        <p className="popup-text">
          In addition to the random generator, you can explore a catalog of
          recipes sorted by category. Each recipe comes with all the information
          you need to prepare a delicious meal. I encourage you to leave a like
          and a comment on the recipes you enjoy to help me improve the quality
          and provide better recommendations in the future.
        </p>

        <p className="popup-text render-warning">
          Please note that this website is hosted on the Render free tier, which
          may result in a longer loading time. However, rest assured that while
          you're reading this message, the website is already working in the
          background and will be ready by the time you press the "Close" button.
        </p>

        <Button onClick={onClose} variant="primary" className="popup-button">
          Close
        </Button>
      </div>
    </div>
  );
};

export default PopupWindow;
