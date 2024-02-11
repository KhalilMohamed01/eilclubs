import React, { useEffect } from 'react'
import { MdDashboard,MdEmojiEvents } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { FaUsers } from "react-icons/fa";
import { Link } from 'react-router-dom';



function Sidebar() {
  const url = window.location.pathname;
  const setActive = () => {
    removeActive()
    switch (url) {
      case '/profile':
        document.getElementById('profile').classList.add('active')
        break
      case '/events':
        document.getElementById('events').classList.add('active')
        break
      case '/members':
        document.getElementById('members').classList.add('active')
        break
      default:
        document.getElementById('dashboard').classList.add('active')
    }
    

  }

  const removeActive=() => {
    document.getElementById('profile').classList.remove('active')
    document.getElementById('events').classList.remove('active')
    document.getElementById('members').classList.remove('active')

  }

  useEffect(()=>{
    setActive()
  },[])
  return (
    <div className='card'>
          <div className='sidebar'>
              <Link className='sidebar-item' id='profile'  to="/profile"><ImProfile/> Profile </Link>
              <Link className='sidebar-item' to="/events" id='events'> <MdEmojiEvents /> Events</Link>
              <Link className='sidebar-item' to="/members" id='members'><FaUsers/> Members</Link>
        </div>

    </div>
  )
}

export default Sidebar
