import React, { useContext, useEffect, useState } from 'react'
import "./form.css"
import "./responsive.css"
import { Button } from 'react-bootstrap'
import { Link } from 'react-router'
import DataContext from '../../components/Context/DataContext'

const FormLanding = ({ showprogresshandler }) => {

     const [age, setAge] = useState('');
     const [agree, setAgree] = useState(false);
     const [agree2, setAgree2] = useState(false);
     const [error, setError] = useState('');
     const { setFormData } = useContext(DataContext);


     // formData handler .....
     useEffect(() => {
          setFormData(prev => ({
               ...prev,
               age: age,
               agree: agree
          }));
     }, [age, agree]);



     const handleSubmit = () => {


          // Validation
          if (!age || isNaN(age)) {
               setError('Please enter a valid age.');
               return;
          }
          if (!agree) {
               setError('You must agree to the terms and conditions.');
               return;
          }

          setError(''); // Clear error if validation passes
          console.log('Form submitted successfully:', { age, agree });
          showprogresshandler();

     };

     const handleAgeChange = (e) => {
          const value = e.target.value;
          setAge(value);

          // Remove error if valid age is entered
          if (value && !isNaN(value)) {
               setError('');
          }
     };

     const handleAgreeChange = (e) => {
          const isChecked = e.target.checked;
          setAgree(isChecked);

          // Remove error if checkbox is checked
          if (isChecked) {
               setError('');
          }
     };

     const handleAgreeChange2 = (e) => {
          const isChecked = e.target.checked;
          setAgree2(isChecked);

     };




     return (
          <div className='form-conatiner'>
               <div className='form-header mt-0 mb-4'>
                    <h3>Build your personalized diet and workout routine</h3>
                    <p>according to your preferences</p>
               </div>
               <div className='age-input-group d-flex justify-content-center gap-4 align-items-center fw-bold mb-4'>
                    <label htmlFor="age" className='fw-bold mb-0'>YOUR AGE</label>
                    <input className='age-input'
                         type="number"
                         name="age"
                         value={age}
                         onChange={handleAgeChange}
                    />
               </div>
               <div className='grp-input-check d-flex justify-content-center gap-4 align-items-center fw-bold'>
                    <input
                         className='agree-input'
                         type="checkbox"
                         name="agree"
                         checked={agree}
                         onChange={handleAgreeChange}
                         id="agree-checkbox"
                    />
                    <p className='agree-terms-para'>By continuing, you agree to our <Link to={'/termsandservices'}> Terms of service </Link> and acknowledge our <Link to={'/termsandservices'}> Privacy policy </Link></p>
               </div>
               <div className='grp-input-check d-flex justify-content-center gap-4 align-items-center fw-bold mt-0'>
                    <input type="checkbox" className='agree-input' name="agree2" checked={agree2}
                         onChange={handleAgreeChange2} />
                    <p className='agree-terms-para'>I would like to receive updates about products, services, and special offers from RightIntake via email</p>
               </div>
               {error && (
                    <div className="text-danger mb-3 text-center">
                         {error}
                    </div>
               )}
               <div className='mobile-button d-flex' >
                    <button className='letsGoButton' onClick={handleSubmit}>Lets Go</button>
               </div>

          </div>
     )
}

export default FormLanding