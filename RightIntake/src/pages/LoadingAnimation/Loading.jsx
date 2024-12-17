import React from "react";
import LoadingAnimation from "../../components/Lottie/loadingAnimation";
import "./loading.css";
const Loading = ({
  message = "Hang tight! We're preparing your results. This won't take long...",
}) => {
  return (
    <div className="loading-container">
      <div className="animationConatiner">
        <LoadingAnimation />
      </div>
      <h4 className="text">{message}</h4>
    </div>
  );
};

export default Loading;
