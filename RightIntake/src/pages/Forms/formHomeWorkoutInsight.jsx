import React from 'react'
import NavigationButton from '../../components/Button/navigationButton';
import { Col, Row } from 'react-bootstrap';
import { dumbels, workoutinsight } from '../../components/Images';

const FormHomeWorkoutInsight = ({ handleNext }) => {


     return (
          <div className='container'>
               <div className='height-ui-container'>
                    <Row>
                         <Col sm={12} md={6}>
                              <div className='d-flex flex-column align-items-center justify-content-center gap-2 mb-2' style={{ height: '100%' }}>
                                   <img src={workoutinsight} alt="workoutinsight" className='workoutinsight-image' />
                              </div>
                         </Col>
                         <Col sm={12} md={6} className='workout-insight-section2'>
                              <h4 className='text-center fw-bold mb-4'>Home workouts are highly effective when done consistently, with proper form, and combined with a balanced diet and sufficient rest to support your fitness goals.</h4>
                              <div className='workoutinsight-wrapper mb-2'>
                                   <span className='insight-label d-flex align-items-center gap-2'>
                                        <img src={dumbels} alt="workoutinsight" className='workoutinsight-list-image' />
                                        Convenience
                                   </span>
                                   <span className='insight-label d-flex align-items-center gap-2'>
                                        <img src={dumbels} alt="workoutinsight" className='workoutinsight-list-image' />
                                        Privacy
                                   </span>
                                   <span className='insight-label d-flex align-items-center gap-2'>
                                        <img src={dumbels} alt="workoutinsight" className='workoutinsight-list-image' />
                                        Flexibility
                                   </span>
                                   <span className='insight-label d-flex align-items-center gap-2'>
                                        <img src={dumbels} alt="workoutinsight" className='workoutinsight-list-image' />
                                        Cost-Effective
                                   </span>
                              </div>

                         </Col>
                    </Row>

                    <div className='workout-submit-btn d-flex align-items-center justify-content-center mt-5'>
                         <NavigationButton handleNext={handleNext} />
                    </div>

               </div>
          </div>
     )
}

export default FormHomeWorkoutInsight