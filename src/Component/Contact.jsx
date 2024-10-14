import React from 'react'
import NavBar from './NavBar'
import contact from '../assets/Images/Frame 93.png'

const Contact = () => {
  return (
    <div>
        <NavBar/>

        <div>
            <img src={contact} alt='contact' className='w-100' />
        </div>
    </div>
  )
}

export default Contact