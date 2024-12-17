import React, { useState } from 'react'
import Footer from '../components/footerComponent/footer'
import NavbarComponent from '../components/navbarComponent/navbar'

const Layout = ({ children }) => {

     return (
          <>
               {/* Navbar */}
               <NavbarComponent  />

               {/* Components */}
               <div className='layout-wrapper'>
                    {children}
               </div>


               {/* Footer */}
               <Footer />
          </>
     )
}

export default Layout