import React, { useContext, useState } from 'react'
import Layout from '../layoutPage';
import './final.css'
import { appstoreimage } from '../../components/Images';
import { playstoreimage } from '../../components/Images';
import { realintakegrp } from '../../components/Images';
const PaymentSuccess = () => {
  return (
    <Layout>
    <div className='final-container'>
      <div className='final-text-container'>
        <h3 className='text-center fw-bold fs-.3 w-75'>We have received your payment successfully. 
            Your personalized diet plan is being prepared and will be sent to you shortly to your mail.
             Thank you for choosing us
        </h3>
      </div>
      <div className='final-content-container'>
        <div className='final-content-container-info'>         
            <h3 className='fw-bold'>Take Your Fitness Journey to the Next Level!</h3>
            <h4 className='mt-4'>Get access to advanced features on our app to support your health goals. 
                Track your calories, monitor your progress, receive reminders,
                 and access daily fitness tips – all in one place!
            </h4>

            <div className='appstore-icons'>
            <img src={appstoreimage} className='appicon'/>
            <h4 className='ms-3 mt-1 fw-bold w-50 fs-2'>Download on the App store </h4>
            <img src={playstoreimage} className='appicon'/>
            <h4 className='ms-3 mt-1 fw-bold w-50 fs-2'>Download on the Play store </h4>
            </div>
            <h4 className='mt-5'>Get features like calorie tracking, daily tips, 
                progress monitoring, and more – all in our mobile app
            </h4>

        </div>
        <div className='final-content-container-image'>
        <img src={realintakegrp} />
        </div>
      </div>
      <div className='final-container-userManual'>
          <div className='final-userManual-info'>
            <h3 className='fw-bold'>How to Use Your Diet Plan</h3>
            <h3 className='mt-4'>Your diet plan will include</h3>
            <div className='usermanual-info'>
            <h3 className='final-maual-heading'>Daily Meal Breakdown:</h3>
            <h3 className='final-maual-def'>Simple recipes and portion sizes.</h3>
            <h3 className='final-maual-heading'>Calorie & Nutrition Info:</h3>
            <h3 className='final-maual-def'>Balance your macros for your goals</h3>
            <h3 className='final-maual-heading'>Easy-to-Follow Instructions:</h3>
            <h3 className='final-maual-def'>Designed for your busy lifestyle.</h3>
            </div>
          </div>
          <div className='final-userManual-image'>
            
          </div>

      </div>
    </div>
    </Layout>
  );
};

export default PaymentSuccess;

