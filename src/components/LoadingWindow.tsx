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
          Show your support by liking and commenting on your favorite recipes,
          helping us improve and offer even better recommendations in the
          future.
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
