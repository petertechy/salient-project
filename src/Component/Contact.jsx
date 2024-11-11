import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import aa from '../assets/Images/mdi-light_calendar.png'
import bb from '../assets/Images/Frame 120.png'
import cc from '../assets/Images/Frame 119.png'
import wo from '../assets/Images/work01.png'
import wor from '../assets/Images/work02.png'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <>
            <NavBar />


            <div className='d-flex justify-content-center w-100'>
                <div style={{ width: '100%', marginRight: '0' }} id='conta'>
                    <div style={{
                        backgroundImage: `url(${wo})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '20vh',
                        width: 'auto'
                    }}>

                        <div className='p-3 mx-5'>
                            <p className='mt-3 h4 font-weight-bold'>Contact</p>
                            <p className='d-flex text-decoration-none'>
                                <Link className='text-dark mr-3 text-decoration-none' to="/"> Home</Link>
                                <Link className='text-dark mr-3 text-decoration-none' to="/contact"> Contact</Link>
                            </p>
                        </div>

                    </div>
                </div>
                <div style={{ width: '100%', marginLeft: '-120px', }}>
                    <div
                        style={{
                            backgroundImage: `url(${wor})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '20vh',
                            width: 'auto'
                        }}
                    >
                    </div>
                </div>
            </div>
            <div>

                <div className='porthe p-5 ' >
                    <div className='container text-center mx-auto mb-5' >
                        <p className='dot'> . </p>
                        <small className='open '>CONTACT WITH AGENCY</small>
                        <h1 className=' next'> Feel free to get in touch <br /> with us</h1>

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
                                <textarea placeholder='Write Comment' className='form-control' style={{ height: "9em" }} />
                            </div>
                        </div>
                        {/* <button className='btn btn my-4' id='butt'>Send a Message</button> */}

                        <button className='btn btn ' id='butt'> Send a Message</button>
                    </div>
                </div>

                <div className='container mx-auto' id='background' >
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

                <div className="map-container" style={{ width: "100%", height: "400px" }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126927.19944521619!2d6.566590797123338!3d6.200897017186133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104392b2b061bd39%3A0x749611dbcabe9489!2sAsaba%2C%20Delta!5e0!3m2!1sen!2sng!4v1731311248735!5m2!1sen!2sng"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>

                </div>




            </div>
            <Footer />
        </>
    )
}

export default Contact