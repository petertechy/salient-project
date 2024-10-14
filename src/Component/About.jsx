import React from 'react'
import aa from '../assets/Images/Frame 100.png'
import bb from '../assets/Images/Frame 113.png'
import cc from '../assets/Images/Frame 157.png'
import dd from '../assets/Images/Frame 159.png'
import NavBar from './NavBar'

const About = () => {
    return (
        <>
            <NavBar />
            <div>
                <img src={aa} alt='aa' className='w-100' />
            </div>
            <div className='porthead'>
                <div className='container'>
                    <img src={bb} alt="portfolio" className='w-100' />
                </div>
            </div>

            <div className='container '>
                <div className='row mt-5 justify-content-between'>
                    <div className='col-lg-5'>
                        <img src={cc} alt="about" className='w-100 mt-5' />
                    </div>
                    <div className='col-lg-5'>
                        <p className='dot'> . </p>
                        <small className='open '>ABOUT THE AGENCY</small>
                        <h1 className=' next'> Get to know about our agency</h1>
                        <p className='h6 font-weight-bold' id='lorem'>Lorem ipsum dolor sit amet consectetur. Facilisi non faucibus mattis nibh. </p>
                        <p>Lorem ipsum dolor sit amet consectetur. Facilisi non faucibus mattis nibh. Sed at vehicula urna et pretium neque aliquam. Sed eu cursus posuere purus diam scelerisque in.</p>
                        <div className='d-flex'>
                            <img src={dd} alt='dd' className='mr-3' />
                            <div>
                                <p className='haven'>Matthew Haven</p>
                                <p>Founder</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            
            <marquee behavior="scroll" direction="left" scrollamount="10" loop="infinite">
        <div className='d-flex ' >
          <p className="con"> Our satisfied <span style={{color:"#F5900D"}}>&</span> happy clients</p>
        </div>
      </marquee>
      <hr/>

      <div  className='container'>
            <div className='d-flex justify-content-between'>

            </div>
      </div>
        </>
    )
}

export default About