import React from 'react'
import { MdDashboard,MdEmojiEvents } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { FaUsers } from "react-icons/fa";



function Sidebar() {
  return (
    <div className='card'>
          <div className='sidebar'>
              <div className='sidebar-item'> <MdDashboard/> Dashboard</div>
              <div className='sidebar-item'><ImProfile/> Profile</div>
              <div className='sidebar-item active'> <MdEmojiEvents /> Events</div>
              <div className='sidebar-item'><FaUsers/> Members</div>
        </div>

    </div>
  )
}

export default Sidebar
