import React, { useContext, useEffect, useState } from 'react'
import "./form.css"
import { dumbels, bodyfat1, bodyfat2, bodyfat3, bodyfat4, bodyfat5, bodyfat6, bodyfat7, bodyfat8, acheivmenticon, congratsicon } from '../../components/Images';
import NavigationButton from '../../components/Button/navigationButton';
import DataContext from '../../components/Context/DataContext';
import axios from 'axios';
import { bodyfatinsights } from '../../components/apis';

const FormBodyfatInsight = ({ handleNext }) => {

     const { formData } = useContext(DataContext);
     const [bmiInsightData, setBmiInsightData] = useState([])

     let BODYFAT = formData?.bodyFatPercentage;


     const getImageForRange = (value) => {

          if (value <= 10) return bodyfat1;
          if (value <= 14) return bodyfat2;
          if (value <= 19) return bodyfat3;
          if (value <= 24) return bodyfat4;
          if (value <= 29) return bodyfat5;
          if (value <= 34) return bodyfat6;
          if (value <= 39) return bodyfat7;
          return bodyfat8;
     };

     const getRangeLabel = (value) => {
          if (value <= 10) return "6-10%";
          if (value <= 14) return "11-14%";
          if (value <= 19) return "15-19%";
          if (value <= 24) return "20-24%";
          if (value <= 29) return "25-29%";
          if (value <= 34) return "30-34%";
          if (value <= 39) return "34-39%";
          return ">40%";
     };

     // get bodyfat insight data ...

     useEffect(() => {

          getBodyFatInsightData();

     }, formData?.bodyFatPercentage)

     const getBodyFatInsightData = async () => {
          try {
               await axios.post(bodyfatinsights, {
                    bodyFatPercentage: BODYFAT
               }).then((response) => {
                    setBmiInsightData(response.data);
               })

          } catch (error) {
               alert(error);
          }
     }


     return (
          <div className='body-insight-div'>

               <div className='body-insight-ui-conatiner d-flex align-items-center'>
                    <div className='body-insight-section1'>
                         <div className="d-flex justify-content-center">
                              <img
                                   src={getImageForRange(BODYFAT)}
                                   alt="fitness"
                                   className="bodyfatinsight-image"
                              />
                         </div>
                    </div>
                    <div className='body-insight-section2 '>
                         <p className='section2-span fw-bold'>Your current body fat percentage is</p>
                         <p className='section2-span2 fw-bold'>{getRangeLabel(BODYFAT)}</p>
                         <div className='section2-para-grp'>
                              <div className='body-fat-img-mobile'>
                                   <img src={acheivmenticon} alt="acheivmenticon" width={60} />
                              </div>
                              <p className='section2-para1 mt-2'>{bmiInsightData?.message}</p>
                              <p className='section2-para1'>{bmiInsightData?.motivation} <img src={acheivmenticon} alt="acheivmenticon" width={60} className='body-fat-img-desktop' /></p>
                         </div>
                         <p className='section2-para2 mt-4'>Congratulation you have acheived &nbsp;<span>
                              <img src={congratsicon} alt="congratsicon" width={30} />
                         </span>  </p>

                         <div className='section2-para2-content d-flex align-items-center gap-2'>
                              <img src={dumbels} alt="dumbels" width={26} />
                              <p className='section2-para2'>{bmiInsightData?.benefits[0]}</p>
                         </div>
                         <div className='section2-para2-content d-flex align-items-center gap-2'>
                              <img src={dumbels} alt="dumbels" width={26} />
                              <p className='section2-para2'>{bmiInsightData?.benefits[1]}</p>
                         </div>

                    </div>
               </div>
               <div className='mobile-button d-flex align-items-center'>
                    <NavigationButton handleNext={handleNext} />
               </div>
          </div>
     )
}

export default FormBodyfatInsight