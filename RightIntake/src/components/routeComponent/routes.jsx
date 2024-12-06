import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from '../../pages/layoutPage';
import HomePage from '../../pages/Home/home';
import FormLayout from '../../pages/Forms/formLayout';

const RoutesComponent = () => {
     return (
          <BrowserRouter>
               <Routes>
                    <Route index path="/" element={<Layout> <HomePage />  </Layout>} />
                    <Route path="/basicform" element={<FormLayout />} />
               </Routes>
          </BrowserRouter>
     )
}

export default RoutesComponent