import React from 'react'
import About from '../components/About'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Jog_img from '../../public/Jog_img.jpg'

const Abou = () => {
  return (
    <div >
        <Navbar/>
        <div className='min-h-screen'  >
         <About/>
        </div>
      
      <Footer/>
    </div>
  )
}

export default Abou
