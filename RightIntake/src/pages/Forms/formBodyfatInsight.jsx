import React from 'react'
import "./form.css"
import { dumbels, bodyfat1, bodyfat2, bodyfat3, bodyfat4, bodyfat5, bodyfat6, bodyfat7, bodyfat8, acheivmenticon, congratsicon } from '../../components/Images';
import NavigationButton from '../../components/Button/navigationButton';

const FormBodyfatInsight = ({ handleNext }) => {

     const getImageForRange = (value) => {
          console.log({ value })

          if (value <= 10) return bodyfat1;
          if (value <= 14) return bodyfat2;
          if (value <= 19) return bodyfat3;
          if (value <= 24) return bodyfat4;
          if (value <= 29) return bodyfat5;
          if (value <= 34) return bodyfat6;
          if (value <= 39) return bodyfat7;
          return bodyfat8;
     };
     return (
          <div className='body-insight-ui-conatiner d-flex align-items-center'>
               <div className='body-insight-section1'>
                    <div className="d-flex justify-content-center">
                         <img
                              src={getImageForRange(20)}
                              alt="fitness"
                              // width={447}
                              // height={650}
                              className="bodyfatinsight-image"
                         />
                    </div>
               </div>
               <div className='body-insight-section2 '>
                    <span className='section2-span fw-bold'>Your current body fat percentage is</span><br/>
                    <span className='section2-span2 fw-bold'>15 - 19 %</span>
                    <div className='section2-para-grp'>
                         <p className='section2-para1 mt-2'>“You're in fantastic shape—your dedication really shows!”</p>
                         <p className='section2-para1'>“Your a little step away from reaching your goal push harder” <img src={acheivmenticon} alt="acheivmenticon" width={60} /></p>
                    </div>
                    <p className='section2-para2 mt-4'>Congratulation you have acheived &nbsp;<img src={congratsicon} alt="congratsicon" width={30} />  </p>
                    <div className='d-flex align-items-center gap-2'>
                         <img src={dumbels} alt="dumbels" width={26} />
                         <p className='section2-para2'>Reduced Risk of Chronic Diseases</p>
                    </div>
                    <div className='d-flex align-items-center gap-2'>
                         <img src={dumbels} alt="dumbels" width={26} />
                         <p className='section2-para2'>Balanced Hormone Levels</p>
                    </div>
                    <div className='body-insight-button d-flex align-items-center justify-content-start'>
                         <NavigationButton handleNext={handleNext} />
                    </div>
               </div>
          </div>
     )
}

export default FormBodyfatInsight