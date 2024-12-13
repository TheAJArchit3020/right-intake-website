import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from '../../pages/layoutPage';
import HomePage from '../../pages/Home/home';
import FormLayout from '../../pages/Forms/formLayout';
import FormOverallSummary from '../../pages/Forms/formOverallSummary';

const RoutesComponent = () => {
     return (
          <BrowserRouter>
               <Routes>
                    <Route index path="/" element={<Layout> <HomePage />  </Layout>} />
                    <Route path="/basicform" element={<FormLayout />} />
                    <Route path="/overallsummary" element={<FormOverallSummary />} />
               </Routes>
          </BrowserRouter>
     )
}

export default RoutesComponent