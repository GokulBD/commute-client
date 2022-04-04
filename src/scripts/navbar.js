import React from 'react'
import "../styles/navbar.css"
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className="navbar">
        <span className='logo'> COMMUTE  </span>
        <ul className='list'>
            <li className='listItem'>
                <img src="https://picsum.photos/200/300
                " alt="" className='avatar' />
            </li>
            <li className='listItem'>Gokul</li>
            <Link to="/login" className='navlink'>
                  login
                </Link>
        </ul>
    </div>
  )
}

export default Navbar