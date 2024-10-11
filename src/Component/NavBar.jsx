import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const NavBar = () => {
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "white"}}>
                <a className="navbar-brand" href="#">SS</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav list-line mx-auto">
                        <li className="nav-item list-line-item  ">
                            <Link to="/" className="nav-link active font-weight-bold text-center ">. Home</Link>
                        </li>
                        <li className="nav-item list-line-item  ">
                            <Link to="/" className="nav-link active font-weight-bold text-center ">. Services</Link>
                        </li>
                        <li className="nav-item list-line-item  ">
                            <Link to="/" className="nav-link active font-weight-bold text-center ">. Portfolio</Link>
                        </li>
                        <li className="nav-item list-line-item  ">
                            <Link to="/" className="nav-link active font-weight-bold text-center ">. Products</Link>
                        </li>
                        <li className="nav-item list-line-item  ">
                            <Link to="/" className="nav-link active font-weight-bold text-center ">. Teams</Link>
                        </li>
                        <li className="nav-item list-line-item  ">
                            <Link to="/" className="nav-link active font-weight-bold text-center ">. Join Us</Link>
                        </li>
                    </ul>
                    <ul>
                        <li className="nav-item list-line-item " >
                            <a className='nav-link text-center' id="button" style={{ borderRadius: "20px" }} >Contact Us</a>
                        </li>
                    </ul>
                </div>
            </nav>

<Footer/>
        </>
    )
}

export default NavBar