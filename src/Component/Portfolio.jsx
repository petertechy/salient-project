import React from 'react'
import NavBar from './NavBar'
import portfolio from '../assets/Images/Rectangle 197.svg'
import frame from '../assets/Images/Frame 90.png'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Portfolio = () => {
  return (
    <>
      <NavBar />

      <div className="">
        <img src={frame} alt="frame" className='w-100' />
        </div>

      <div className='porthead'>
        <div className='container'>
          <img src={portfolio} alt="portfolio" className='w-100' />
        </div>
      </div>

      <div className='container my-5'>
        <div className='row'>
          <div className='col-lg-8 mb-3'>
            <div>
              <p className='font-weight-bold h3 mb-4'>Product development</p>
              <p>Neque porro est qui dolorem ipsum quia  quaed inventore veritatis et quasi architecto beatae vitae dicta sunt  explicabo. Aelltes port lacus quis enim var sed efficitur turpis  gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of  the printing and typesetting industry.</p>
              <p className='font-weight-bold my-3'>Biophilia is the idea that humans  possess an innate tendency to seek connections with nature. The term  translates</p>
              <p className='my-3'>When an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not  only five centuries, but also the leap into electronic  typesetting, remaining essentially unchanged. Aelltes port lacus quis  enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem  Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <p className='my-3'>Neque porro est qui dolorem ipsum quia  quaed inventore veritatis et quasi architecto beatae vitae dicta sunt  explicabo. Aelltes port lacus quis enim var sed  efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply  dummy text of the printing and typesetting  industry.</p>
            </div>
            <div>
              <p className='font-weight-bold h3 my-4'>Project challenges</p>
              <ul>
                <li>Nemo enim ipsam voluptatem quia voluptas mus et iusto odio</li>
                <li>Nam libero tempore, cum soluta nobis est eligend simos ducimus</li>
                <li>Accusamus et iusto odio dignissimos ducimus</li>
              </ul>
              <p>When an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not  only five centuries, but also the leap into electronic  typesetting, remaining essentially unchanged.</p>
            </div>
          </div>

          <div className='col-lg-4'>
            <div className=' p-3 border-top border-warning' id='location'>
              <div className='ml-5'>

                <p style={{ color: "#CCCCCC" }} className='mt-2 h5'>Date:</p>
                <p className='font-weight-bold'>23 May 2024</p>

                <p style={{ color: "#CCCCCC" }} className=' h5 mt-2'>Services:</p>
                <p className='font-weight-bold'>Website development</p>

                <p style={{ color: "#CCCCCC" }} className='mt-3 h5'>Client:</p>
                <p className='font-weight-bold'>Haven Consult</p>

                <p style={{ color: "#CCCCCC" }} className='mt-2 h5'>Location:</p>
                <p className='font-weight-bold'>Lagos, Nigeria</p>

                <ul className="list-unstyled d-flex mt-2 " style={{ gap: "10px" }}>
                  <li className=''>
                    <i class="fa-brands fa-square-facebook h2 rounded"></i>
                  </li>
                  <li className=''>
                    <i class="fa-brands fa-linkedin rounded h2"></i>
                  </li>
                  <li className=''>
                    <i class="fa-brands fa-square-x-twitter rounded h2"></i>
                  </li>
                  <li className=''>
                    <i class="fa-regular fa-envelope rounded h2"></i>
                  </li>
                  <li className=''>
                    <i class="fa-solid fa-print h2 rounded"></i>
                  </li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </div>
      <hr />
      <div className='container'>
        <div className="row">
          <div className="col-lg-12">
            <div className="d-flex justify-content-between" id='previous'>
              <p><i class="fa-solid fa-arrow-left"></i>Previous</p>
              <Link to="/portfolioDetails"> Next <i class="fa-solid fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Portfolio