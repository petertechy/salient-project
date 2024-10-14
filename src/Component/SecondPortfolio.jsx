import React from 'react'
import NavBar from './NavBar'
import frame from '../assets/Images/Frame 99.png'
import Footer from './Footer'

const SecondPortfolio = () => {
  return (
    <div>
        <NavBar/>
        <img src={frame} alt="frame" className="w-100"/>

        <Footer/>
    </div>
  )
}

export default SecondPortfolio