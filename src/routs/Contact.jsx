import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import Form   from '../components/Form'
const Contact = () => {
  return (
    <div className="contact">
        <Navbar/>
        <HeroImage heading='CONTACT.' text='Contact BBC.'/>
        <Form/>
        <Footer/>
    </div>
  )
}

export default Contact