import React from 'react'
import NavBar from './NavBar'
import frame from '../assets/Images/Frame 99.png'
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

const SecondPortfolio = () => {
    return (
        <div>
            <NavBar />
            <img src={frame} alt="frame" className="w-100" />

            <div>
                <OwlCarousel
                    className="owl-theme"
                    loop
                    margin={10}
                    nav
                    autoplay
                    autoplayTimeout={2000}
                    responsive={{
                        0: { items: 1 },
                        600: { items: 3 },
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

            <Footer />
        </div>
    )
}

export default SecondPortfolio