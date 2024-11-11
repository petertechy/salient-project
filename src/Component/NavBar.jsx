import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Images/Logo.png"


const NavBar = () => {
    return (
        <>
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "white"}}>
                <img src={logo} alt='logo'  />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav list-line mx-auto">
                        <li className="nav-item list-line-item ">
                            <Link to="/" className="nav-link active font-weight-bold text-center mr-3 "> <span style={{marginTop:"-4px", position:"absolute"}}>.</span> &nbsp; Home</Link>
                        </li>
                        <li className="nav-item list-line-item  ">
                            <Link to="/about" className="nav-link active font-weight-bold text-center mr-3 "><span style={{marginTop:"-4px", position:"absolute"}}>.</span> &nbsp; Services</Link>
                        </li>
                        <li className="nav-item list-line-item  ">
                            <Link to="/portfolio" className="nav-link active font-weight-bold text-center mr-3 "><span style={{marginTop:"-4px", position:"absolute"}}>.</span> &nbsp; Portfolio</Link>
                        </li>
                        <li className="nav-item list-line-item  ">
                            <a href="#ourProduct" className="nav-link active font-weight-bold text-center mr-3 "><span style={{marginTop:"-4px", position:"absolute"}}>.</span> &nbsp; Products</a>
                        </li>
                        <li className="nav-item list-line-item  ">
                            <a  href='#teamGroup' className="nav-link active font-weight-bold text-center mr-3 "><span style={{marginTop:"-4px", position:"absolute"}}>.</span> &nbsp; Teams</a>
                        </li>
                        <li className="nav-item list-line-item  ">
                            <Link to="/work" className="nav-link active font-weight-bold text-center mr-3 "><span style={{marginTop:"-4px", position:"absolute"}}>.</span> &nbsp; Join Us</Link>
                        </li>
                    </ul>
                    <ul className='navbar-nav list-line'>
                        <li className="nav-item list-line-item " >
                            <Link className='nav-link text-center py-2 px-4 w-100' to="/contact" id="button"  >Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

        </>
    )
}

export default NavBar