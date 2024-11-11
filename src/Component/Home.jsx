import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import one from '../assets/Images/Rectangle 162.png'
import two from '../assets/Images/Rectangle 163.png'
import three from '../assets/Images/Rectangle 164.png'
import four from '../assets/Images/Rectangle 165.png';
import component from '../assets/Images/Component 11.png';
import arrow from '../assets/Images/Arrow.png';
import white from '../assets/Images/Frame 51.png'
import dd from '../assets/Images/Frame 23.png'
import e from '../assets/Images/dd.png'
import f from '../assets/Images/aa.png'
import g from '../assets/Images/bb.png'
import h from '../assets/Images/cc.png'
import Ellipse from '../assets/Images/Ellipse 26.png'
import { Link } from 'react-router-dom'
import oo from '../assets/Images/Frame 54.png'
import b from '../assets/Images/images.png'
import c from '../assets/Images/image.png'
import aaa from '../assets/Images/Linie 1.png'
import bbb from '../assets/Images/Group 115.png'
import ccc from '../assets/Images/Group 112.png'
import ddd from '../assets/Images/nwjbp9nc 2.png'
import eee from '../assets/Images/world bank 1.png'

import fillOne from '../assets/Images/Filled 01.png'
import noFillOne from '../assets/Images/No fill 01.png'
import fillTwo from '../assets/Images/Filled 02.png'
import noFillTwo from '../assets/Images/No fill 02.png'
import fillThree from '../assets/Images/Filled 03.png'
import noFillThree from '../assets/Images/No fill 03.png'
import fillFour from '../assets/Images/Filled 04.png'
import noFillFour from '../assets/Images/No fill 04.png'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Scroll from './Scroll'

const Home = () => {
  return (
    <>
      <NavBar />
      <Scroll />

      <hr />
      <div  id='head'>
        <div className="row overflow-hidden">

          <div className='col-lg-5 text-center w-100'>
            <div id="landing" className='w-100'>


            <div id='para' className='display-2'>
              <p>Think.</p>
              <p className='ml-4' style={{ color: "#CCCCCC" }}>Create.</p>
              <p id="solution" style={{ marginLeft: "1.5em" }}>Solution.</p>
            </div>

            <div
              className=" justify-content-center align-items-center" id="pin">
            </div>

            <div className="image-container float-right">
              <img src={arrow} alt="arrow" className="imggg" />
              <img className="spin-image" src={component} alt="Spinning " />
            </div>

            </div>
          </div>

          <div className='col-lg-2  text-center'>
            <img src={b} alt='bbbb' className='w-100 h-100 overflow-hidden' id = 'second' />
          </div>

          <div className='col-lg-5 text-center  w-100 '>
            <img src={c} alt='cccc' className='w-100 h-100 overflow-hidden' />
          </div>

        </div>
      </div>

      {/* brands */}
      <div className='container mt-5 '>
        <p className='text-center mb-5 font-weight-bold h5'>
          ---------------------------------------------------- BRANDS THAT TRUST US -----------------------------------------------------
        </p>
      </div>
      <div className='container my-5'>
        <OwlCarousel
          className="owl-theme"
          loop
          margin={15}
          nav
          autoplay
          autoplayTimeout={4000}
          responsive={{
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 5 }
          }}
        >
          <div className="item"><img className='w-100 ' src={aaa} alt="Owl"  /></div>
          <div className="item"><img className='w-100 ' src={bbb} alt="Owl" /></div>
          <div className="item"><img className='w-100 ' src={ccc} alt="Owl"  /></div>
          <div className="item"><img className='w-100 ' src={ddd} alt="Owl" /></div>
          <div className="item"><img className='w-100 ' src={eee} alt="Owl" /></div>
        </OwlCarousel>
      </div>

      {/* overlay */}
      <div className="container my-5 w-100" >
        <div className='row w-100'>
          <div className='col-lg-4 w-100'>
            <div id="contain">
              <div>

                <p className='agency p-2 h4 mx-auto'>
                  Creative Agency
                  <sup>
                    <i className="fa-regular fa-lightbulb p-3 ml-2" id='ic'></i>
                  </sup>
                </p>
              </div>

              <div className="middle p-4 w-100" id='middle'>
                <div className="text" id='text'>
                  <p className='font-weight-bold h4 '>Creative Agency</p><br/>
                  <p>This very space is important simply due to fact.</p>
                  <hr className='bg-white ' />
                  <p className='span'>
                    <span className='mor'>Read More</span>
                    <i className="fa-solid fa-arrow-right right"></i>
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className='col-lg-4 w-100' >
            <div id="containe">
              <p className='agency p-2 h4 mx-auto'>Quality Work
                <sup>
                  <i className="fa-solid fa-users p-3 ml-2" id='ic'></i>
                </sup>
              </p>

              <div className="middl p-3 w-100" id='middl'>
                <div className="tex" id='tex'>
                  <p className='font-weight-bold h4'>Quality Work</p><br/>
                  <p>This very space is important simply due to fact.</p>
                  <hr className='bg-white ' />
                  <p className='span'>
                    <span className='mor'>Read More</span>
                    <i className="fa-solid fa-arrow-right right"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-4 w-100'>
            <div id='con'>
              <p className='agency p-2 h4 mx-auto'>Professional Team
                <sup>
                  <i class="fa-solid fa-users p-3 ml-2" id='ic'></i>
                </sup>
              </p>

              <div className="midd p-3 w-100" id='midd'>
                <div className="te" id='te'>
                  <p className='font-weight-bold h4'>Professional Team</p><br/>
                  <p>This very space is important simply due to fact.</p>
                  <hr className='bg-white ' />
                  <p className='span'>
                    <span className='mor'>Read More</span>
                    <i className="fa-solid fa-arrow-right right"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>


      {/* agency */}
      <div className='bg-white mb-4'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <img src={Ellipse} alt='Ellipse' className="mt-5 w-100" />
            </div>
            <div className='col-lg-6'>
              <div className=''>
                <p className='dot'> . </p>
                <small className='open '>ABOUT THE AGENCY</small>
                <h1 className=' next'>We’re top notch award winning software solution agency</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Facilisi non faucibus mattis nibh. Sed at vehicula urna et pretium neque aliquam. Sed eu cursus posuere purus diam scelerisque in. Pellentesque dolor adipiscing etiam ultricies in. Sed sed pretium volutpat molestie. </p>
                <p>Velit odio mi non lectus urna et. Mattis morbi est cras sodales ultrices nibh ut sodales. A velit enim a neque malesuada ultricies vitae aliquam tristique. Enim sagittis nulla netus velit magna elementum mattis dictum. Lectus.</p>
                <button className='btn btn py-3 px-4 ' id="more">Discover More</button>
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
                <p id='pp' className='font-weight-normal d-flex justify-content-center text-center'>
                  <p className='eee'>Read More </p>
                  <i className="fa-solid fa-arrow-right" id="ReadMore"></i>
                </p>
              </div>
            </div>
            <div className="col-lg-3 mb-3">
              <div className=' w-100 p-4' style={{ backgroundColor: "#F5F5F5", borderRadius: "10px" }}>
                <img src={e} alt="oo" className='pt-2' />
                <p className='font-weight-bold h5 mt-3'>Software <br /> development </p>
                <hr className='w-50 mt-5 mx-auto text-center' />
                <p id='pp' className='font-weight-normal d-flex justify-content-center text-center'>
                  <p className='eee'>Read More </p>
                  <i className="fa-solid fa-arrow-right" id="ReadMore"></i>
                </p>
              </div>
            </div>
            <div className="col-lg-3 mb-3">
              <div className=' w-100 p-4' style={{ backgroundColor: "#F5F5F5", borderRadius: "10px" }}>
                <img src={g} alt="oo" className='pt-2' />
                <p className='font-weight-bold h5 mt-3'>Cloud/Data  <br /> engineering </p>
                <hr className='w-50 mt-5 mx-auto text-center' />
                <p id='pp' className='font-weight-normal d-flex justify-content-center text-center'>
                  <p className='eee'>Read More </p>
                  <i className="fa-solid fa-arrow-right" id="ReadMore"></i>
                </p>
              </div>
            </div>
            <div className="col-lg-3 mb-3">
              <div className=' w-100 p-4' style={{ backgroundColor: "#F5F5F5", borderRadius: "10px" }}>
                <img src={h} alt="oo" className='pt-2' />
                <p className='font-weight-bold h5 mt-3'>UI/UX <br /> designing </p>
                <hr className='w-50 mt-5 mx-auto text-center' />
                <p id='pp' className='font-weight-normal d-flex justify-content-center text-center'>
                  <p className='eee'>Read More </p>
                  <i className="fa-solid fa-arrow-right" id="ReadMore"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className='mb-5' />
      <div className="container">

        <div className='d-flex justify-content-between'>
          <div>
            <p className='dot'> . </p>
            <small className='open '>OUR WORK SHOWCASE</small>
            <h1 className=' next'>Explore our best recent <br /> completed projects </h1>
          </div>
          <div style={{ marginTop: '7em' }}>
            <button className='p-3 font-weight-bold border-0' id='viewWork' >View All Work</button>
          </div>
        </div>
        <hr />
        <div className='row p-3' id="explore">
          <div className='col-lg-2 w-100' >
              <img src={fillOne} alt='number' className='w-50' id='noFill'   />
              <img src={noFillOne} alt='number' className='w-50' id='fill' />
          </div>

          <div className='col-lg-8 h2  font-weight-bold' id="two">Unique product design</div>

          <div className='col-lg-2  text-right'>
            <i className="fa-solid fa-arrow-right arrow p-3 h1" id="three"></i>
          </div>
        </div>
        <hr />
        <div className='row p-3' id="explore">
          <div className='col-lg-2 w-100'>
          <img src={fillTwo} alt='number' className='w-50' id='noFill'   />
          <img src={noFillTwo} alt='number' className='w-50' id='fill' />
          </div>
          <div className='col-lg-8  h2 font-weight-bold' id="two">UI/UX Design for Tecno</div>

          <div className='col-lg-2  text-right'>
            <i className="fa-solid fa-arrow-right arrow p-3 h1" id="three"></i>
          </div>
        </div>
        <hr />
        <div className='row p-3' id="explore">
          <div className='col-lg-2 w-100' >
          <img src={fillThree} alt='number' className='w-50' id='noFill'   />
          <img src={noFillThree} alt='number' className='w-50' id='fill' />
          </div>
          <div className='col-lg-8 h2 font-weight-bold' id="two">Crown digitals website</div>

          <div className='col-lg-2  text-right'>
            <i className="fa-solid fa-arrow-right arrow p-3 h1" id="three"></i>
          </div>
        </div>
        <hr />
        <div className='row p-3' id="explore">
          <div className='col-lg-2 '>
          <img src={fillFour} alt='number' className='w-50' id='noFill'   />
          <img src={noFillFour} alt='number' className='w-50' id='fill' />
          </div>
          <div className='col-lg-8 h2 font-weight-bold' id="two">Creative digital market</div>

          <div className='col-lg-2  text-right'>
            <i className="fa-solid fa-arrow-right arrow p-3 h1" id="three"></i>
          </div>
        </div>
        <hr />

      </div>

      <hr className='mb-5' />

      <div className='container' id='ourProduct'>
        <div className="row">
          <div className="col-lg-6">
            <p className='dot'> . </p>
            <small className='open '>OUR DISTINCTIVE PRODUCTS</small>
            <h1 className=' next'>Discover our recent <br /> groundbreaking solutions </h1>

            <div className='d-flex p-2 w-100  my-4' id="hoverr" >
              <img src={white} alt='white' className='mr-3' />
              <div className='ml-3'>
                <p className='font-weight-bold'>Test</p>
                <p>A test to see how all products will appear on her</p>
              </div>
            </div>
            <div className='d-flex p-2 w-100  my-4' id="hoverr" >
              <img src={white} alt='white' className='mr-3' />
              <div className='ml-3'>
                <p className='font-weight-bold'>Test</p>
                <p>A test to see how all products will appear on her</p>
              </div>
            </div>

            <div className='d-flex p-2 w-100  my-4' id="hoverr" >
              <img src={white} alt='white' className='mr-3' />
              <div className='ml-3'>
                <p className='font-weight-bold'>Test</p>
                <p>A test to see how all products will appear on her</p>
              </div>
            </div>

          </div>
          <div className="col-lg-6">
            <img src={oo} alt='oo' className='w-100 mt-5' />
          </div>
        </div>
      </div>



      {/* unlock the potential */}
      <div className="marquee-wrapper mt-5">
        <div className="marquee">
          <div className='d-flex p-3' id='scroll'>
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
                <div className='bg-white  border-bottom border-warning p-2 w-75'>
                  <small className='h6' style={{ color: '#D1D1D1' }}>Senior Developer</small>
                  <p className='font-weight-bold h5'>Mike Idowu</p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 mb-4'>
              <img src={two} alt='aa' className='w-100' />
              <div style={{ backgroundColor: "#D1D1D1" }} className='w-100'>
                <div className='bg-white border-bottom  border-warning p-2 w-75'>
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
          <div className='bg-white rounded px-5 py-4'>

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
                    <Link to="/work" className='apply text-decoration-none p-2 link '>
                      <span className='here'> Apply Here</span>
                      <i className="fa-solid fa-arrow-right arrow "></i>
                    </Link>
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
                    <Link to="/work" className='apply text-decoration-none p-2 link '>
                      <span className='here'> Apply Here</span>
                      <i className="fa-solid fa-arrow-right arrow "></i>
                    </Link>
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
                    <Link to="/work" className='apply text-decoration-none p-2 link '>
                      <span className='here'> Apply Here</span>
                      <i className="fa-solid fa-arrow-right arrow "></i>
                    </Link>
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
            <i className="fa-solid fa-arrow-right text-white  solid"></i>
          </div>

          <div
            className="mx-auto d-flex justify-content-center align-items-center" id="colored"
          >
          </div>
        </div><br /><br /><br /><br /><br /><br /><br />
        <p className='text-center h1 display-5 mb-3 font-weight-bold'>Have any projects in mind? <br />Get in touch with us!</p>
      </div>


      <Footer />
    </>
  )
}

export default Home