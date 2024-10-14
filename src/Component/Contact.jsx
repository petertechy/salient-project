import React from 'react'
import NavBar from './NavBar'
import contact from '../assets/Images/Frame 93.png'
import location from '../assets/Images/Frame 128.png'
import Footer from './Footer'

const Contact = () => {
  return (
    <>
        <NavBar/>

        <div>
            <img src={contact} alt='contact' className='w-100' />
        </div>
<div>
<div className='porthead'>

</div>

<div className='container' style={{backgroundColor: "#F5F5F5" }}>
    <div className='row'>
        <div className='col-lg-4'>
                <div className="d-flex justify-content-center">
                        <p className='font-weight-bold'>Address</p>
                        <p>22 Office Street, Gooodplace, <br/>Asaba,  Delta</p>
                </div>
        </div>
    </div>
</div>

        <div>
            <img src={location} alt='location' className='w-100' />
        </div>
</div>
        <Footer/>
    </>
  )
}

export default Contact