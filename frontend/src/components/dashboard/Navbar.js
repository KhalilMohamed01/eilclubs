import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineLogout } from "react-icons/md";
import { useLogout } from '../../hooks/useLogout';
function Navbar() {
      const {logout} = useLogout()

  const handleLogout = () => {
    logout()
    
  }

  return (
    <header>
        <div className="navbar">
              <Link to="/">
              <h1>LOGO</h1>
              </Link>   
        <div onClick={handleLogout} className='card logout-button'>
            <MdOutlineLogout />
           </div> 
        </div>
    </header>
  )
}

export default Navbar
