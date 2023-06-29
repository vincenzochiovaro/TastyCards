import loadingImage from "../images/loadingImage.gif";
import "../styles/loadingWindow.css";

const LoadingWindow = () => {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <h2>Loading . . . </h2>
        <img src={loadingImage} alt="loading Image" className="loading-image" />
        <p className="loading-text">
          Introducing <strong>Tasty Cards</strong>, the ultimate solution for
          those indecisive moments when choosing a recipe becomes a challenge.
          There are a lot of websites providing great instructions for making
          meals but if you are looking to quickly explore dishes completely at
          random my recipe generator should be just what you have been looking
          for.
        </p>

        <p className="loading-text render-warning">
          Please note that this website is hosted on the Render free tier, which
          may result in a longer loading time.
        </p>
      </div>
    </div>
  );
};

export default LoadingWindow;
