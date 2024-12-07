import React, { useContext, useEffect, useState } from 'react'
import "./form.css"
import { Button } from 'react-bootstrap'
import { Link } from 'react-router'
import DataContext from '../../components/Context/DataContext'

const FormLanding = ({ showprogresshandler }) => {

     const [age, setAge] = useState('');
     const [agree, setAgree] = useState(false);
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




     return (
          <div className='form-conatiner'>
               <div className='form-header mt-0 mb-4'>
                    <h3>Build your personalized diet and workout routine</h3>
                    <p>according to your preferences</p>
               </div>
               <div className='d-flex justify-content-center gap-4 align-items-center fw-bold mb-4'>
                    <label htmlFor="age">Your Age</label>
                    <input className='age-input'
                         type="text"
                         name="age"
                         value={age}
                         onChange={handleAgeChange}
                    />
               </div>
               <div className='d-flex justify-content-center gap-4 align-items-center fw-bold'>
                    <input
                         type="checkbox"
                         name="agree"
                         checked={agree}
                         onChange={handleAgreeChange}
                    />
                    <p>By continuing, you agree to our <Link to={'/termsandservices'}> Terms of service </Link> and acknowledge our <Link to={'/termsandservices'}> Privacy policy </Link>Privacy policy</p>
               </div>
               <div className='d-flex justify-content-center gap-4 align-items-center fw-bold mb-4'>
                    <input type="checkbox" name="" id="" />
                    <p>I would like to receive updates about products, services, and special offers from RightIntake via email</p>
               </div>
               {error && (
                    <div className="text-danger mb-3 text-center">
                         {error}
                    </div>
               )}
               <div className='d-flex justify-content-center' >
                    <Button className='letsGoButton text-black' onClick={handleSubmit}>Lets Go..</Button>
               </div>

          </div>
     )
}

export default FormLanding