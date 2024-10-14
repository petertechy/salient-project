import React from 'react'
import NavBar from './NavBar'
import contact from '../assets/Images/Frame 93.png'
import location from '../assets/Images/Frame 128.png'
import Footer from './Footer'
import aa from '../assets/Images/mdi-light_calendar.png'
import bb from '../assets/Images/Frame 120.png'
import cc from '../assets/Images/Frame 119.png'

const Contact = () => {
    return (
        <>
            <NavBar />

            <div>
                <img src={contact} alt='contact' className='w-100 h-100' />
            </div>
            <div>
                <div className='porthead p-5 '>
                    <div className='container text-center mx-auto mb-5'>
                        <p className='dot'> . </p>
                        <small className='open '>CONTACT WITH AGENCY</small>
                        <h1 className=' next'> Feel free to get in touch with us</h1>

                        <div className='row mt-5'>
                                <div className='col-lg-6'>
                                    <input type='text' placeholder='Your Name' className='form-control mb-3' />
                                </div>
                                <div className='col-lg-6'>
                                    <input type='text' placeholder='Email Address' className='form-control mb-3' />
                                </div>
                        </div>
                        <div className='row mt-2'>
                                <div className='col-lg-6'>
                                    <input type='text' placeholder='Phone' className='form-control mb-3' />
                                </div>
                                <div className='col-lg-6'>
                                    <input type='text' placeholder='Select Service' className='form-control mb-3' />
                                </div>
                        </div>
                        <div className='row mt-3'>
                                <div className='col-lg-12'>
                                    <textarea placeholder='Write Comment' className='form-control' style={{height:"9em"}}/>
                                </div>
                        </div>
                        <button className='btn btn mt-3' id='butt'>Send a Message</button>
                    </div>
                </div>

                {/* <div className='container mx-auto justify-content-center  position-absolute' style={{ backgroundColor: "#F5F5F5", marginTop:"-4em" }}> */}
                <div className='container mx-auto ' style={{ backgroundColor: "#F5F5F5"}}>
                    <div className='row p-4'>
                        <div className='col-lg-4'>
                            <div className="d-flex justify-content-center p-2">
                                <div className='mr-4'>
                                    <img src={aa} alt="aa" className='' />
                                </div>
                                <div className='mr-2'>
                                    <p className='font-weight-bold'>Address</p>
                                    <p>22 Office Street, Goodplace, <br />Asaba,  Delta</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className="d-flex justify-content-center p-2">
                                <div className='mr-4'>
                                    <img src={bb} alt="bb" className='' />
                                </div>
                                <div className='mr-2'>
                                    <p className='font-weight-bold'>Contact</p>
                                    <p>hello@salient.com <br />+234 802 200 0000</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className="d-flex justify-content-center p-2">
                                <div className='mr-4'>
                                    <img src={cc} alt="cc" className='' />
                                </div>
                                <div className='mr-2'>
                                    <p className='font-weight-bold'>Timing</p>
                                    <p>Mon - Sat: 8:00 am to 6:00 pm <br />Sunday: CLOSED</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <img src={location} alt='location' className='w-100' />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact