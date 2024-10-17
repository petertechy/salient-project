import React from 'react'
import NavBar from './NavBar'
import aa from '../assets/Images/00.png'
import bb from '../assets/Images/01.png'
import cc from '../assets/Images/02.png'
import dd from '../assets/Images/03.png'
import ee from '../assets/Images/04.png'
import ff from '../assets/Images/05.png'
import Footer from './Footer'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import wo from '../assets/Images/work01.png'
import wor from '../assets/Images/work02.png'
import { Link } from 'react-router-dom'

const SecondPortfolio = () => {
    return (
        <div>
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
                                <Link className='text-dark mr-3 text-decoration-none' to="/portfolio"> .Portfolio</Link>
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

            <div className='porthead p-5'>

            <div className='container'>
            

                {/* <div> */}
                <OwlCarousel
                    className="owl-theme"
                    loop
                    margin={10}
                    nav
                    autoplay
                    autoplayTimeout={2000}
                    responsive={{
                        0: { items: 1 },
                        600: { items: 2 },
                        1000: { items: 3 }
                    }}
                >
                    <div className="item"><img className='w-100' src={aa} alt="Owl" /></div>
                    <div className="item"><img className='w-100' src={bb} alt="Owl" /></div>
                    <div className="item"><img className='w-100' src={cc} alt="Owl" /></div>
                    <div className="item"><img className='w-100' src={dd} alt="Owl" /></div>
                    <div className="item"><img className='w-100' src={ee} alt="Owl" /></div>
                    <div className="item"><img className='w-100' src={ff} alt="Owl" /></div>
                </OwlCarousel>
            </div>
            {/* </div> */}
                </div>

            <Footer />
        </div>
    )
}

export default SecondPortfolio