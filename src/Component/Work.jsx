import React from 'react'
import NavBar from './NavBar'
import work from '../assets/Images/work01.png'
import workk from '../assets/Images/work02.png'
const Work = () => {
  return (
    <>
        <NavBar/>

        {/* <div>
            <div className='row'>
                <div className='col-lg-8'>
                <img src={work} alt='work' className='w-100'/>
                </div>
                <div className='col-lg-4'>
                        <img src={workk} alt='work' className='w-100'/>
                </div>
            </div>
        </div> */}

        <div className='container'>
            <div className='row mt-5'>
                <div className='col-lg-8'>
                    <div className=''>
                       <p className='font-weight-bold h5'>DESCRIPTION</p>
                       <p>Salient is dedicated to empowering businesses by transforming data into actionable insights. As a forward-thinking company in the tech industry, Salient strives to create innovative solutions that help our clients thrive in a data-driven world. Our mission is to provide our customers with cutting-edge tools and resources that make data accessible, understandable, and valuable. Salient is continuously expanding its impact as a leader in data analytics, driven by a commitment to excellence and customer satisfaction.</p>
                       <p className='font-weight-bold h5'>Key Job Responsibilities</p>
                       <p>
                       We are seeking a Junior Data Analyst to join our dynamic team, where you will play a crucial role in supporting data-driven decision-making processes. This is a permanent position offering the opportunity to grow and develop your skills in a collaborative and innovative .</p>
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default Work