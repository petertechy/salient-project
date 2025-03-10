import React from 'react'
import NavBar from './NavBar'
import wo from '../assets/Images/work01.png'
import wor from '../assets/Images/work02.png'
import Footer from './Footer'

const Work = () => {
    return (
        <>
            <NavBar />
        {/* <div className='row '>

            <div className=' d-flex  justify-content-between w-100'>
                <div style={{ width: '100%', marginRight: '0' }}>
                    <div style={{
                        backgroundImage: `url(${wo})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '20vh',
                        width: 'auto'
                    }}>

                        <div className='p-3 mx-5 w-100'>
                            <p className='w-100 h5 font-weight-bold'>Jnr. Permanet Data Analyst</p>
                            <p className='w-100'> JOB ID:240829A</p>
                            <p className='w-100 font-weight-bold'>Posted: April 16, 2024</p>
                        </div>

                    </div>
                </div>
                <div style={{ width: '100%', marginLeft: '-120px', }}>
                    <div className='w-100'
                        style={{
                            backgroundImage: `url(${wor})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '20vh',
                            width: 'auto'
                        }}
                        >
                        <div className="text-center  mx-auto">

                        <button className='btn btn p-3 mt-4 w-25' id='apply'>Apply</button>
                        </div>
                    </div>
                </div>
                        </div>
            </div> */}

{/* <div className="row" id='wooo'>
    <div className="col-md-6 col-sm-12 mb-3" style={{ width: 'auto', marginRight: '0' }}>
        <div style={{ backgroundImage: `url(${wo})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '20vh', width: 'auto' }}>
            <div className="p-3 w-100">
                <p className="w-100 h5 font-weight-bold">Jnr. Permanent Data Analyst</p>
                <p className="w-100">JOB ID: 240829A</p>
                <p className="w-100 font-weight-bold">Posted: April 16, 2024</p>
            </div>
        </div>
    </div>

    <div className="col-md-6 col-sm-12 mb-3" style={{marginLeft: '', width:'100%'}}>
        <div className="w-100" style={{ backgroundImage: `url(${wor})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '20vh', width: '100%' }}>
            <div className="text-center mx-auto">
                <button className="btn btn p-3 mt-4 w-50" id="apply">Apply</button>
            </div>
        </div>
    </div>
</div> */}


<div className='row no-gutters overflow-hidden' style={{overflow:"hidden"}}>
    
    <div className='col-md-6 col-sm-12'>
        <div style={{
            backgroundImage: `url(${wo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '20vh',
            width: '100%',  // Full width to avoid overflow
            paddingLeft:"100px"
        }}>
            <div className='p-3 w-100'>
                <p className='w-100 h5 font-weight-bold'>Jnr. Permanent Data Analyst</p>
                <p className='w-100'>JOB ID: 240829A</p>
                <p className='w-100 font-weight-bold'>Posted: April 16, 2024</p>
            </div>
        </div>
    </div>

    <div id='New' className='col-md-6 col-sm-12'>
        <div 
            style={{
                backgroundImage: `url(${wor})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '20vh',
                width: '123%',  // Full width to avoid overflow
                position:"relative",
                right:"150px",
                maxWidth:'150vw',
            }}>
            <div className="d-flex justify-content-center align-items-center h-100">
                <button className='btn btn p-3 w-25' id='apply'>Apply</button>
            </div>
        </div>
    </div>
</div>









            <div className='container mb-5'>
                <div className='row mt-5'>
                    <div className='col-lg-8'>
                        <div className=''>
                            <p className='font-weight-bold h5'>DESCRIPTION</p>
                            <p>Salient is dedicated to empowering businesses by transforming data into actionable insights. As a forward-thinking company in the tech industry, Salient strives to create innovative solutions that help our clients thrive in a data-driven world. Our mission is to provide our customers with cutting-edge tools and resources that make data accessible, understandable, and valuable. Salient is continuously expanding its impact as a leader in data analytics, driven by a commitment to excellence and customer satisfaction.</p>

                            <p className='font-weight-bold h5'>Key Job Responsibilities</p>
                            <p>
                                We are seeking a Junior Data Analyst to join our dynamic team, where you will play a crucial role in supporting data-driven decision-making processes. This is a permanent position offering the opportunity to grow and develop your skills in a collaborative and innovative .</p>

                            <div>
                                <ul>
                                    <li>Data Collection & Analysis: Collect, process, and analyze data to generate insights that support business objectives.</li>
                                    <li>Collaboration: Work closely with various departments to understand their data needs and provide timely, accurate analyses.</li>
                                    <li>Reporting: Assist in the creation of detailed reports and dashboards to visualize key metrics and trends.</li>
                                    <li>Data Integrity: Ensure the accuracy and reliability of data through meticulous validation and cleaning processes.</li>
                                    <li>Continuous Improvement: Contribute to the development of data processes and tools, identifying opportunities for automation and efficiency.</li>
                                </ul>
                            </div>

                            <p className='font-weight-bold h5'>BASIC QUALIFICATIONS</p>
                            <div>
                                <ul>
                                    <li>1+ years of experience in data analysis or a related field</li>
                                    <li>Proficiency in data analysis tools such as Excel, SQL, or Python</li>
                                    <li>Strong analytical and problem-solving skills with attention to detail</li>
                                    <li>Ability to communicate findings clearly to both technical and non-technical audiences</li>
                                </ul>
                            </div>

                            <p className='font-weight-bold h5'>PREFERRED QUALIFICATIONS</p>
                            <div>
                                <ul>
                                    <li>Bachelor’s degree in a quantitative field such as Data Science, Statistics, Mathematics, or related discipline</li>
                                    <li>Familiarity with data visualization tools such as Tableau or Power BI</li>
                                    <li>Experience working in a team-oriented, collaborative environment</li>
                                </ul>
                            </div>
                            <p className='font-weight-bold h5'>COMPESATION</p>
                            <p>Salient offers a competitive salary and benefits package, reflective of the cost of labor in various geographic markets. The base pay for this position ranges from $50,000/year to $75,000/year, depending on experience and market location. As part of our commitment to total compensation, we also offer a range of benefits including health insurance, retirement plans, and professional development opportunities. To learn more about our benefits, please visit [Salient’s careers page link].</p>
                            <p>This position will remain open until filled. Interested candidates should apply via our careers site.</p>
                        </div>

                    </div>

                    <div className="col-lg-4">
                        <div className='jobDetails'>
                            <p className='font-weight-bold h5'>Job details</p>
                            <hr className=' ' />
                            <p><i className="fa-solid fa-location-dot"></i> Island, Lagos, NG</p>
                            <hr className=' ' />
                            <p><i class="fa-solid fa-user-plus"></i> Analyst Dept</p>
                            <hr className=' ' />
                            <p><i class="fa-solid fa-book-bookmark"></i> Salient</p>
                            <hr className=' ' />
                            <p><i class="fa-regular fa-calendar-days"></i> Date Posted???</p>
                            <hr className=' ' />
                        </div>
                        <div className=''>
                            <p className='font-weight-bold h5'>Related jobs</p>
                            <hr />
                            <p className='font-weight-bold'>Assistant Field Marketing Agent</p>
                            <p>Location: Mainland, Lagos,  NG</p>
                            <p>Posted: April 16, 2024</p>
                            <p>Status: Close</p>
                        </div>
                        <hr />
                        <div>
                            <p className='font-weight-bold h5'>Assistant Field Marketing Agent </p>
                            <p>Location: Island, Lagos,  NG</p>
                            <p>Posted: April 16, 2024</p>
                            <p>Status: Open</p>
                        </div>
                        <hr />
                        <div>
                            <p className='font-weight-bold'>Assistant Field Marketing Agent</p>
                            <p>Location: Delta,  NG</p>
                            <p>Posted: April 16, 2024</p>
                            <p>Status: Open</p>
                        </div>
                        <hr />
                        <div>
                            <p className='font-weight-bold'>Share this job</p>
                            <hr />
                            <ul className="list-unstyled d-flex mb-0" style={{ gap: "10px" }}>
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
            <Footer />
        </>
    )
}

export default Work