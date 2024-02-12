import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import { useAuthContext } from '../../hooks/useAuthContext'

function Header() {
  const {club} = useAuthContext()
  return (
    <div className='home-header'>
        <Link to="/">
              <h1>LOGO</h1>
        </Link>   
        <Navbar/>
        {club ?  <Link to="/profile"><button className='action-button'>Gérer mon club</button></Link> : <Link to="/login"><button className='action-button'>login</button></Link>}
      
    </div>
  )
}

export default Header
