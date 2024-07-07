import React from 'react'
import ContactForm from '../components/ContactForm'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const contactfo = () => {
  return (
    <div>
        <Navbar/>
        <div className='min-h-screen'>
            <ContactForm/>  
        </div>
      
      <Footer/>
    </div>
  )
}

export default contactfo
