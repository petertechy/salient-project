import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Images/Logo.png"


const Footer = () => {
    return (
        <>
            <footer className="py-5" id="footer">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 mb-lg-0 mb-3">
                            <img src={logo} alt='logo' />
                            <p className='font-weight-bold'>Let's start working together</p>
                            <p className='' id='hello'>hello@salient.com</p>
                        </div>

                        <div className="col-lg-3 mb-lg-0 mb-3">
                            <h6 className="text-medium font-weight-bold">Quick Links</h6>
                            <hr className="w-25 mx-0 bg-warning mb-5" style={{ height: '3px', border: 'none' }} />

                            <p> &#10914; About  </p>
                            <p> &#10914;  Meet The Team  </p>
                            <p> &#10914; Our Projects  </p>
                            <p> &#10914; Career  </p>
                            <p> &#10914; Contact  </p>
                        </div>

                        <div className="col-lg-3 mb-lg-0 mb-3">
                            <h6 className="text-medium font-weight-bold">Contact Info</h6>
                            <hr className="w-25 mx-0 bg-warning mb-5" style={{ height: '3px', border: 'none' }} />


                            <p className='font-weight-bold'>Phone Number</p>
                            <p className="">+234 90 200 000 0000</p>

                            <p className='font-weight-bold'>Email</p>
                            <Link to="hello@sailent.com" className=" text-dark text-decoration-none">hello@sailent.com</Link>

                            <p className='font-weight-bold mt-3'>Address</p>
                            <p>22, Office Street, Somewhere Lane, Asaba, Delta NG</p>

                            <ul className="list-unstyled d-flex mb-0" style={{ gap: "10px" }}>
                                <li className=''><Link to="#" className=""><i style={{ backgroundColor: 'black' }} className="text-white p-1 rounded bi bi-facebook"></i> </Link></li>
                                <li className=''><Link to="#" className=""><i style={{ backgroundColor: 'black' }} className="text-white p-1 rounded bi bi-twitter"></i> </Link></li>
                                <li className=''><Link to="#" className=""><i style={{ backgroundColor: 'black' }} className="text-white p-1 rounded bi bi-instagram"></i></Link></li>
                                <li className=''><Link to="#" className=""><i style={{ backgroundColor: 'black' }} className="text-white p-1 rounded bi bi-youtube"></i></Link></li>
                            </ul>


                        </div>

                        <div className="col-lg-3 mb-lg-0 mb-3">
                            <h6 className="text-medium font-weight-bold ">Gallery</h6>
                            <hr className="w-25 mx-0 bg-warning mb-5" style={{ height: '3px', border: 'none' }} />

                            <p className="mb-0">Gallery One</p>
                        </div>
                    </div>

                </div>
            </footer>
            <section id="section">
                <div className='container py-2'>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="d-flex justify-content-between align-items-center">
                                <small>
                                    Copyright © Sallant Software Solution Right Reserved
                                </small>

                                <ul className="list-unstyled d-flex mb-0" style={{ gap: "15px" }}>
                                    <small>About </small>
                                    <small>Privacy Policy</small>
                                    <small>Services </small>
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