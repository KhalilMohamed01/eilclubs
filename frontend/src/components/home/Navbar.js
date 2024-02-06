import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='home-nav'>
      <div className='section-active'><Link to="/">Home</Link></div>
      <div ><Link to="/">Events</Link></div>
      <div ><Link to="/">Clubs</Link></div>
    </div>
  )
}

export default Navbar
