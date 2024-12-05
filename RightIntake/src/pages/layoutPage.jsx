import React from 'react'
import Navbar from '../components/navbarComponent/navbar'
import Footer from '../components/footerComponent/footer'

const Layout = ({ children }) => {
     return (
          <>
               {/* Navbar */}
               <Navbar />
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