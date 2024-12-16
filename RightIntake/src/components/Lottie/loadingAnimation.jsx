import React from 'react';
import Lottie, { useLottie } from 'lottie-react'; 
import loadingAnim from './animation.json';
const LoadingAnimation = () => {

    const options = {
        animationData: loadingAnim,
        loop: true
      };
    
      
  const { View } = useLottie(options);

  return <>{View}</>;
};

export default LoadingAnimation;

