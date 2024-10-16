import React from 'react'
import bb from '../assets/Images/Frame 113.png'
import cc from '../assets/Images/Frame 157.png'
import dd from '../assets/Images/Frame 159.png'
import ee from '../assets/Images/Ellipse 53.png'
import ff from '../assets/Images/Frame 161.png'
// import two from '../assets/Images/Frame 37.png'
// import three from '../assets/Images/Frame 35.png'
import NavBar from './NavBar'
import Footer from './Footer'
import aaa from '../assets/Images/Linie 1.png'
import bbb from '../assets/Images/Group 115.png'
import ccc from '../assets/Images/Group 112.png'
import ddd from '../assets/Images/nwjbp9nc 2.png'
import eee from '../assets/Images/world bank 1.png'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import one from '../assets/Images/Rectangle 162.png'
import two from '../assets/Images/Rectangle 163.png'
import three from '../assets/Images/Rectangle 164.png'
import four from '../assets/Images/Rectangle 165.png';
import wo from '../assets/Images/work01.png'
import wor from '../assets/Images/work02.png'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <>
            <NavBar />
            <div className='d-flex justify-content-center w-100'>
                <div style={{ width: '100%', marginRight: '0' }}>
                    <div style={{
                        backgroundImage: `url(${wo})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '20vh',
                        width: 'auto'
                    }}>

                        <div className='p-3 mx-5'>
                            <p className='mt-3 h4 font-weight-bold'>Portfolio</p>
                            <p className='d-flex text-decoration-none'>
                                <Link className='text-dark mr-3 text-decoration-none' to="/"> Home</Link>
                                <Link className='text-dark mr-3 text-decoration-none' to="/about"> .About</Link>
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
            <hr />

            <marquee behavior="scroll" direction="left" scrollamount="10" loop="infinite">
                <div className='d-flex ' >
                    <p className="con"> Our satisfied <span style={{ color: "#F5900D" }}>&</span> happy clients</p>
                </div>
            </marquee>
            <hr />

            <div className='container'>
                <div className='d-flex justify-content-between my-4'>
                    <div>
                        <p className='dot'> . </p>
                        <small className='open '>OUR CLIENTS FEEDBACK</small>
                        <h1 className=' next'> What they're talking <br /> about us</h1>
                    </div>
                    <div className='mt-5'>
                        <i className="icon fa-solid fa-arrow-right"></i>
                        <i className="icon fa-solid fa-arrow-left"></i>
                    </div>
                </div>
            </div>
            {/* <div className='container'>
                <div className="row mb-5">
                    <div className='col-lg-6'>
                        <div className='d-flex p-4' style={{ backgroundColor: "#F5F5F5" }}>
                            <div className=''>
                                <p className='font-weight-bold h5' style={{ color: "#F5900D" }}>Donald Trump</p>
                                <p>Lorem ipsum dolor sit amet consectetur. Facilisi non faucibus mattis nibh. Sed at vehicula urna et pretium neque aliquam. Sed eu cursus posuere purus diam scelerisque in.</p>
                            </div>
                            <div className='w-100 text-center'>
                                <img src={ee} alt='ee' className='w-100' />
                                <i style={{ color: "#F5900D" }} className="fa-solid fa-star"></i>
                                <i style={{ color: "#F5900D" }} className="fa-solid fa-star"></i>
                                <i style={{ color: "#F5900D" }} className="fa-solid fa-star"></i>
                                <i style={{ color: "#F5900D" }} className="fa-solid fa-star"></i>
                                <i style={{ color: "#F5900D" }} className="fa-solid fa-star"></i>
                                <p>4.9 Reviews</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-6'>
                        <div className='d-flex p-4' style={{ backgroundColor: "#F5F5F5" }}>
                            <div className=''>
                                <p className='font-weight-bold h5' style={{ color: "#F5900D" }}>Barack Obama</p>
                                <p>Lorem ipsum dolor sit amet consectetur. Facilisi non faucibus mattis nibh. Sed at vehicula urna et pretium neque aliquam. Sed eu cursus posuere purus diam scelerisque in.</p>
                            </div>
                            <div className='w-100 text-center'>
                                <img src={ff} alt='ff' className='w-100' />
                                <i style={{ color: "#F5900D" }} className="fa-solid fa-star"></i>
                                <i style={{ color: "#F5900D" }} className="fa-solid fa-star"></i>
                                <i style={{ color: "#F5900D" }} className="fa-solid fa-star"></i>
                                <i style={{ color: "#F5900D" }} className="fa-solid fa-star"></i>
                                <i style={{ color: "#F5900D" }} className="fa-solid fa-star"></i>
                                <p>4.9 Reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="container">
                <OwlCarousel
                    className="owl-theme"
                    loop
                    margin={10}
                    nav
                    autoplay
                    autoplayTimeout={5000}
                    responsive={{
                        0: { items: 1 },
                        600: { items: 2 },
                        1000: { items: 2 }
                    }}
                >
                    <div className='d-flex p-4' style={{ backgroundColor: "#F5F5F5" }}>
                        <div className=''>
                            <p className='font-weight-bold h5' style={{ color: "#F5900D" }}>Donald Trump</p>
                            <p>Lorem ipsum dolor sit amet consectetur. Facilisi non faucibus mattis nibh. Sed at vehicula urna et pretium neque aliquam. Sed eu cursus posuere purus diam scelerisque in.</p>
                        </div>
                        <div className='w-100 text-center'>
                            <img src={ee} alt='ee' className='w-100' />
                            <i style={{ color: "#F5900D" }} className="fa-solid fa-star"></i>
                            <i style={{ color: "#F5900D" }} className="fa-solid fa-star"></i>
                            <i style={{ color: "#F5900D" }} className="fa-solid fa-star"></i>
                            <i style={{ color: "#F5900D" }} className="fa-solid fa-star"></i>
                            <i style={{ color: "#F5900D" }} className="fa-solid fa-star"></i>
                            <p>4.9 Reviews</p>
                        </div>
                    </div>
                    <div className='d-flex p-4' style={{ backgroundColor: "#F5F5F5" }}>
                        <div className=''>
                            <p className='font-weight-bold h5' style={{ color: "#F5900D" }}>Barack Obama</p>
                            <p>Lorem ipsum dolor sit amet consectetur. Facilisi non faucibus mattis nibh. Sed at vehicula urna et pretium neque aliquam. Sed eu cursus posuere purus diam scelerisque in.</p>
                        </div>
                        <div className='w-100 text-center'>
                            <img src={ff} alt='ff' className='w-100' />
                            <i style={{ color: "#F5900D" }} className="fa-solid fa-star"></i>
                            <i style={{ color: "#F5900D" }} className="fa-solid fa-star"></i>
                            <i style={{ color: "#F5900D" }} className="fa-solid fa-star"></i>
                            <i style={{ color: "#F5900D" }} className="fa-solid fa-star"></i>
                            <i style={{ color: "#F5900D" }} className="fa-solid fa-star"></i>
                            <p>4.9 Reviews</p>
                        </div>
                    </div>
                    <div className='d-flex p-4' style={{ backgroundColor: "#F5F5F5" }}>
                        <div className=''>
                            <p className='font-weight-bold h5' style={{ color: "#F5900D" }}>Bola Tinubu</p>
                            <p>Lorem ipsum dolor sit amet consectetur. Facilisi non faucibus mattis nibh. Sed at vehicula urna et pretium neque aliquam. Sed eu cursus posuere purus diam scelerisque in.</p>
                        </div>
                        <div className='w-100 text-center'>
                            <img src={dd} alt='dd' className='w-100' />
                            <i style={{ color: "#F5900D" }} className="fa-solid fa-star"></i>
                            <i style={{ color: "#F5900D" }} className="fa-solid fa-star"></i>
                            <i style={{ color: "#F5900D" }} className="fa-solid fa-star"></i>
                            <i style={{ color: "#F5900D" }} className="fa-solid fa-star"></i>
                            <i style={{ color: "#F5900D" }} className="fa-solid fa-star"></i>
                            <p>4.9 Reviews</p>
                        </div>
                    </div>
                    <div className='d-flex p-4' style={{ backgroundColor: "#F5F5F5" }}>
                        <div className=''>
                            <p className='font-weight-bold h5' style={{ color: "#F5900D" }}>Mona Lisa</p>
                            <p>Lorem ipsum dolor sit amet consectetur. Facilisi non faucibus mattis nibh. Sed at vehicula urna et pretium neque aliquam. Sed eu cursus posuere purus diam scelerisque in.</p>
                        </div>
                        <div className='w-100 text-center'>
                            <img src={ff} alt='ff' className='w-100' />
                            <i style={{ color: "#F5900D" }} className="fa-solid fa-star"></i>
                            <i style={{ color: "#F5900D" }} className="fa-solid fa-star"></i>
                            <i style={{ color: "#F5900D" }} className="fa-solid fa-star"></i>
                            <i style={{ color: "#F5900D" }} className="fa-solid fa-star"></i>
                            <i style={{ color: "#F5900D" }} className="fa-solid fa-star"></i>
                            <p>4.9 Reviews</p>
                        </div>
                    </div>

                </OwlCarousel>
            </div>

            <div className='bg-white '>
                <div className='container'>
                    <div className='text-center'>
                        <p className='dot'> . </p>
                        <small className='open '>OUR PROFESSIONAL TEAMS</small>
                        <h1 className=' next'>Meet the team behind the <br /> agency success</h1>
                    </div>

                    <div className='row mt-5 mx-auto text-center'>
                        <div className='col-lg-3 mb-4'>
                            <img src={one} alt='aa' className='w-100' />
                            <div style={{backgroundColor:"#D1D1D1"}} className='w-100'>
                            <div className='bg-white border-bottom border-warning p-2 w-75'>
                                <small className='h6' style={{color:'#D1D1D1'}}>Senior Developer</small>
                                <p className='font-weight-bold h5'>Mike Idowu</p>
                            </div>
                            </div>
                        </div>
                        <div className='col-lg-3 mb-4'>
                            <img src={two} alt='aa' className='w-100' />
                            <div style={{backgroundColor:"#D1D1D1"}} className='w-100'>
                            <div className='bg-white border-bottom border-warning p-2 w-75'>
                                <small className='h6' style={{color:'#D1D1D1'}}>Senior Developer</small>
                                <p className='font-weight-bold h5'>Olive Adegoke</p>
                            </div>
                            </div>
                        </div>
                        <div className='col-lg-3 mb-4'>
                            <img src={three} alt='aa' className='w-100' />
                            <div style={{backgroundColor:"#D1D1D1"}} className='w-100'>
                            <div className='bg-white border-bottom border-warning p-2 w-75'>
                                <small className='h6' style={{color:'#D1D1D1'}}>Senior Developer</small>
                                <p className='font-weight-bold h5'>Mike Donalds</p>
                            </div>
                            </div>
                        </div>
                        <div className='col-lg-3 mb-4'>
                            <img src={four} alt='aa' className='w-100' />
                            <div style={{backgroundColor:"#D1D1D1"}} className='w-100'>
                            <div className='bg-white border-bottom border-warning p-2 w-75'>
                                <small className='h6' style={{color:'#D1D1D1'}}>Senior Developer</small>
                                <p className='font-weight-bold h5'>Sarah Eromosele</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container my-5'>
                <p className='text-center mb-5 font-weight-bold h5'>
                    -------------------------------------- BRANDS THAT TRUST US ----------------------------------
                </p>
                <OwlCarousel
                    className="owl-theme"
                    loop
                    margin={10}
                    nav
                    autoplay
                    autoplayTimeout={4000}
                    responsive={{
                        0: { items: 1 },
                        600: { items: 2 },
                        1000: { items: 5 }
                    }}
                >
                    <div className="item"><img className='w-100' src={aaa} alt="Owl" /></div>
                    <div className="item"><img className='w-100' src={bbb} alt="Owl" /></div>
                    <div className="item"><img className='w-100' src={ccc} alt="Owl" /></div>
                    <div className="item"><img className='w-100' src={ddd} alt="Owl" /></div>
                    <div className="item"><img className='w-100' src={eee} alt="Owl" /></div>
                </OwlCarousel>
            </div>

            <Footer />
        </>
    )
}

export default About