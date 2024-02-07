import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

function Header() {
  return (
    <div className='home-header'>
        <Link to="/">
              <h1>LOGO</h1>
        </Link>   
        <Navbar/>
        <Link to="/login"><button className='action-button'>login</button></Link>
      
    </div>
  )
}

export default Header
