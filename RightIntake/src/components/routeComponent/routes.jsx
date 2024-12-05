import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import App from '../../App';
import Layout from '../../pages/layoutPage';
import HomePage from '../../pages/Home/home';

const RoutesComponent = () => {
     return (
          <BrowserRouter>
               <Routes>
                    <Route index path="/" element={<Layout> <HomePage />  </Layout>} />
               </Routes>
          </BrowserRouter>
     )
}

export default RoutesComponent