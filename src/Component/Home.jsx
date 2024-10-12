import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <NavBar />


<div className='' id='discover'>
  <div className='container p-3'>
    <div className='bg-white'>

      <div className='text-center'>
          <small className='text-lightgrey'>OUR OPEN JOBS</small>
          <h1>Discover your next career  move</h1>
      </div>

      <div className='shadow border p-3'>
      <div className="d-flex justify-content-between align-items-center">
            <div>
                <p>STUDENT JOBS <span>Intern</span></p>
                <h3>Assistant Field Marketing Agent </h3>
                <small> <i className='bi bi loaction'></i>Lagos, NG </small>
            </div>
            <div>
              <p> Apply Here</p>
            </div>

          </div>
      </div>

    </div>
  </div>

</div>


      {/* project in mind */}
      <div className='bg-white p-5'>
        <div className=" mx-auto bg-primary d-flex justify-content-center align-items-center" style={{ width: '200px',height:'200px'  ,borderRadius:'100%' }}>
          
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Home