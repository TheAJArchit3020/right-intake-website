import React from 'react';
import LoadingAnimation from '../../components/Lottie/loadingAnimation';
import './loading.css';
const Loading = () => {
  return (
    <div className='loading-container'>
    <div className='animationConatiner'>
       <LoadingAnimation />
    </div>
    <h4 className='text'>Hang tight! We're preparing your results. This won't take long...</h4>
    </div>
  );
};

export default Loading;
