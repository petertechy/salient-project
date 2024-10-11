import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <hr id='hrFoot' />
            <Footer className="py-5" id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 mb-lg-0 mb-3">
                            <h6 className="text-medium text-uppercase font-weight-bold mb-5 ">SS</h6>
                            <p className='font-weight-bold'>Let's start working together</p>
                            <p className='' id='hello'>hello@salient.com</p>
                        </div>
                        
                        <div className="col-lg-3 mb-lg-0 mb-3">
                            <h6 className="text-medium font-weight-bold  mb-5">Quick Links</h6>
                            <p> &#10914; About  </p>
                            <p> &#10914;  Meet The Team  </p>
                            <p> &#10914; Our Projects  </p>
                            <p> &#10914; Career  </p>
                            <p> &#10914; Contact  </p>
                        </div>
                        
                        <div className="col-lg-3 mb-lg-0 mb-3">
                            <h6 className="text-medium font-weight-bold  mb-5">Contact Info</h6>
                            
                            <p className='font-weight-bold'>Phone Number</p>
                            <p className="">+234 90 200 000 0000</p>

                            <p className='font-weight-bold'>Email</p>
                            <Link to="hello@sailent.com" className=" text-dark text-decoration-none">hello@sailent.com</Link>
                            
                            <p className='font-weight-bold mt-3'>Address</p>
                            <p>22, Office Street, Somewhere Lane, Asaba, Delta NG</p>
                        </div>
                        
                        <div className="col-lg-3 mb-lg-0 mb-3">
                            <h6 className="text-medium font-weight-bold  mb-5">Gallery</h6>
                            <p className="mb-0">Gallery One</p>
                        </div>
                    </div>
                    
                </div>
            </Footer>
            <section id="section" className='bg-dark'>
                <div className='container'>
                    
         <div className="row">
                        <div className="col-lg-12">
                        <div className="d-flex justify-content-between align-items-center">
                        <div>© 2024 RCCG Victory Center Luton. All Rights Reserved</div>
                        
                        <ul className="list-unstyled d-flex mb-0" style={{ gap: "10px" }}>
                        <li><Link to="#" className=""><i className="bi bi-facebook"></i></Link></li>
                        <li><Link to="#" className=""><i className="bi bi-instagram"></i></Link></li>
                        <li><Link to="#" className=""><i className="bi bi-youtube"></i></Link></li>
                        </ul>
                        </div>
                        </div>
                        </div> 
                        </div>
            </section>

        </>
    )
}

export default Footer