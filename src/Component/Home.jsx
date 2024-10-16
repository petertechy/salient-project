import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import one from '../assets/Images/Rectangle 162.png'
import two from '../assets/Images/Rectangle 163.png'
import three from '../assets/Images/Rectangle 164.png'
import four from '../assets/Images/Rectangle 165.png';

import dd from '../assets/Images/Frame 23.png'
import e from '../assets/Images/dd.png'
import f from '../assets/Images/aa.png'
import g from '../assets/Images/bb.png'
import h from '../assets/Images/cc.png'
import Ellipse from '../assets/Images/Ellipse 26.png'
import { Link } from 'react-router-dom'
import a from '../assets/Images/image 3.png'
import b from '../assets/Images/images.png'
import c from '../assets/Images/image.png'

import aaa from '../assets/Images/Linie 1.png'
import bbb from '../assets/Images/Group 115.png'
import ccc from '../assets/Images/Group 112.png'
import ddd from '../assets/Images/nwjbp9nc 2.png'
import eee from '../assets/Images/world bank 1.png'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Home = () => {
  return (
    <>
      <NavBar />


      <div>
        <div className="row">
          <div className='col-lg-5'>
            <img src={a} alt='a' className='w-100' />
            <p>Think. Create. Solution.</p>
          </div>
          <div className='col-lg-2'>
            <img src={b} alt='b' className='w-100' />
          </div>
          <div className='col-lg-5'>
            <img src={c} alt='c' className='w-100' />
          </div>
        </div>
      </div>

    {/* brands */}
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

      {/* agency */}
      <div className='bg-white mb-4'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <img src={Ellipse} alt='Ellipse' className="" />
            </div>
            <div className='col-lg-6'>
              <div className=''>
                <p className='dot'> . </p>
                <small className='open '>ABOUT THE AGENCY</small>
                <h1 className=' next'>We’re top notch award winning software solution agency</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Facilisi non faucibus mattis nibh. Sed at vehicula urna et pretium neque aliquam. Sed eu cursus posuere purus diam scelerisque in. Pellentesque dolor adipiscing etiam ultricies in. Sed sed pretium volutpat molestie. </p>
                <p>Velit odio mi non lectus urna et. Mattis morbi est cras sodales ultrices nibh ut sodales. A velit enim a neque malesuada ultricies vitae aliquam tristique. Enim sagittis nulla netus velit magna elementum mattis dictum. Lectus.</p>
                <button className='btn btn' id="more">Discover More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />

      {/* solution */}
      <div className="marquee-wrapper">
        <div className="marquee">
          <p className='rolling'> Disruptive <span> & </span>scalable tech solution <span> . </span> </p>

        </div>
      </div>

      <div>
        <img src={dd} alt="dd" className='w-100' />
      </div>

      {/* service provider */}
      <div className='bg-white mb-4'>
        <div className='container'>
          <div className='text-center'>
            <p className='dot'> . </p>
            <small className='open '>WHAT WE'RE OFFERING</small>
            <h1 className=' next'>Services we're providing <br /> to our customers  </h1>
          </div>

          <div className='row mt-5 text-center'>
            <div className="col-lg-3 mb-3">
              <div className=' w-100 p-4' style={{ backgroundColor: "#F5F5F5", borderRadius: "10px" }}>
                <img src={f} alt="oo" className='pt-2' />
                <p className='font-weight-bold h5 mt-3'>IT  <br /> solutions </p>
                <hr className='w-50 mt-5 mx-auto text-center' />
                <p className='font-weight-bold '>Read More <i className='fa-solid fa-arrow-down-right text-dark'></i> </p>
              </div>
            </div>
            <div className="col-lg-3 mb-3">
              <div className=' w-100 p-4' style={{ backgroundColor: "#F5F5F5", borderRadius: "10px" }}>
                <img src={e} alt="oo" className='pt-2' />
                <p className='font-weight-bold h5 mt-3'>Software <br /> development </p>
                <hr className='w-50 mt-5 mx-auto text-center' />
                <p className='font-weight-bold '>Read More <i className='fa-solid fa-arrow-down-right text-dark'></i> </p>
              </div>
            </div>
            <div className="col-lg-3 mb-3">
              <div className=' w-100 p-4' style={{ backgroundColor: "#F5F5F5", borderRadius: "10px" }}>
                <img src={g} alt="oo" className='pt-2' />
                <p className='font-weight-bold h5 mt-3'>Cloud/Data  <br /> engineering </p>
                <hr className='w-50 mt-5 mx-auto text-center' />
                <p className='font-weight-bold '>Read More <i className='fa-solid fa-arrow-down-right text-dark'></i> </p>
              </div>
            </div>
            <div className="col-lg-3 mb-3">
              <div className=' w-100 p-4' style={{ backgroundColor: "#F5F5F5", borderRadius: "10px" }}>
                <img src={h} alt="oo" className='pt-2' />
                <p className='font-weight-bold h5 mt-3'>UI/UX <br /> designing </p>
                <hr className='w-50 mt-5 mx-auto text-center' />
                <p className='font-weight-bold '>Read More <i className='fa-solid fa-arrow-down-right text-dark'></i> </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className='mb-5' />

      {/* unlock the potential */}
      <div className="marquee-wrapper">
        <div className="marquee">
          <div className='d-flex' id='scroll'>
            <p className='h5 mr-5'> * UNLOCK THE POTENTIAL</p>
            <p className='h5 mr-5'> * TRANSFORM IDEA INTO REALITY</p>
            <p className='h5 mr-5'> * INSPIRED WITH CREATIVITY</p>
            <p className='h5 mr-5'> * DESIGN AND DEVELOPEMENT CRAFT</p>
          </div>
        </div>
      </div>


      {/* the team */}
      <div className='bg-white ' id='teamGroup'>
        <div className='container'>
          <div className='text-center'>
            <p className='dot'> . </p>
            <small className='open '>OUR PROFESSIONAL TEAMS</small>
            <h1 className=' next'>Meet the team behind the <br /> agency success</h1>
          </div>

          <div className='row mt-5 mx-auto text-center'>
            <div className='col-lg-3 mb-4'>
              <img src={one} alt='aa' className='w-100' />
              <div style={{ backgroundColor: "#D1D1D1" }} className='w-100'>
                <div className='bg-white border-bottom border-warning p-2 w-75'>
                  <small className='h6' style={{ color: '#D1D1D1' }}>Senior Developer</small>
                  <p className='font-weight-bold h5'>Mike Idowu</p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 mb-4'>
              <img src={two} alt='aa' className='w-100' />
              <div style={{ backgroundColor: "#D1D1D1" }} className='w-100'>
                <div className='bg-white border-bottom border-warning p-2 w-75'>
                  <small className='h6' style={{ color: '#D1D1D1' }}>Senior Developer</small>
                  <p className='font-weight-bold h5'>Olive Adegoke</p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 mb-4'>
              <img src={three} alt='aa' className='w-100' />
              <div style={{ backgroundColor: "#D1D1D1" }} className='w-100'>
                <div className='bg-white border-bottom border-warning p-2 w-75'>
                  <small className='h6' style={{ color: '#D1D1D1' }}>Senior Developer</small>
                  <p className='font-weight-bold h5'>Mike Donalds</p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 mb-4'>
              <img src={four} alt='aa' className='w-100' />
              <div style={{ backgroundColor: "#D1D1D1" }} className='w-100'>
                <div className='bg-white border-bottom border-warning p-2 w-75'>
                  <small className='h6' style={{ color: '#D1D1D1' }}>Senior Developer</small>
                  <p className='font-weight-bold h5'>Sarah Eromosele</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>


      {/* jobs opportunity */}
      <div className='' id='discover'>
        <div className='container'>
          <div className='bg-white rounded p-5'>

            <div className='text-center'>
              <p className='dot'> . </p>
              <small className='open '>OUR OPEN JOBS</small>
              <h1 className=' next'>Discover your next career <br />  move</h1>
            </div>

            <div className=' border p-4 mt-5 bg-body rounded' id='discoverShadow'>
              <div className="row  ">
                <div className="col-lg-6">
                  <p className='font-weight-bold'> STUDENT JOBS <span style={{ color: 'grey' }}>Intern</span></p>
                  <h4 className='font-weight-bold'>Assistant Field Marketing Agent </h4>
                  <small style={{ color: 'grey' }}> <i className='text-warning h5 mr-2 fa-solid fa-location-dot'></i>Lagos, NG </small>
                </div>

                <div className="col-lg-6">
                  <div className='text-right mr-auto mb-3'>
                    <Link to="/work" className='apply text-decoration-none p-2  border border-warning '> Apply Here <i class="fa-solid fa-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>

            <div className=' border p-4 bg-body rounded mt-5' id='discoverShadow'>
              <div className="row  ">
                <div className="col-lg-6">
                  <p className='font-weight-bold'> DATA ANALYST <span style={{ color: 'grey' }}>Full-Term</span></p>
                  <h4 className='font-weight-bold'>Jnr.Permanent Data Analyst </h4>
                  <small style={{ color: 'grey' }}> <i className='text-warning h5 mr-2 fa-solid fa-location-dot'></i>Delta, NG </small>

                </div>

                <div className="col-lg-6">
                  <div className='text-right mr-auto mb-3'>
                    {/* <small className='apply p-2  border border-warning '> Apply Here <i class="fa-solid fa-arrow-right"></i></small> */}
                    <Link to="/work" className='apply text-decoration-none p-2  border border-warning '> Apply Here <i class="fa-solid fa-arrow-right"></i></Link>
                  </div>

                </div>
              </div>
            </div>

            <div className=' border p-4 mt-5 bg-body rounded' id='discoverShadow'>
              <div className="row ">
                <div className="col-lg-6">
                  <p className='font-weight-bold'> Graphics Design  <span style={{ color: 'grey' }}>Part-Time</span></p>
                  <h4 className='font-weight-bold'>Jnr. Staff Product Manager</h4>
                  <small style={{ color: 'grey' }}> <i className='text-warning h5 mr-2 fa-solid fa-location-dot'></i>Abuja, NG </small>

                </div>

                <div className="col-lg-6">
                  <div className='text-right mr-auto mb-3'>
                    {/* <small className='apply p-2  border border-warning '> Apply Here <i class="fa-solid fa-arrow-right"></i></small> */}
                    <Link to="/work" className='apply text-decoration-none p-2  border border-warning '> Apply Here <i class="fa-solid fa-arrow-right"></i></Link>
                  </div>

                </div>
              </div>
            </div>



          </div>
        </div>

      </div>


      {/* project in mind */}


      <div className='bg-white p-3 '>
        <div className='' style={{ position: 'relative', marginTop: "10em" }}>
          <div
            className="mx-auto  d-flex justify-content-center align-items-center" id="pink">
            <i class="fa-solid fa-arrow-right text-white h1"></i>
          </div>

          <div
            className="mx-auto d-flex justify-content-center align-items-center" id="colored"
          >
          </div>
        </div><br /><br /><br /><br /><br /><br /><br />
        <p className='text-center h1 font-weight-bold'>Have any projects in mind? <br />Get in touch with us!</p>
      </div>


      <Footer />
    </>
  )
}

export default Home