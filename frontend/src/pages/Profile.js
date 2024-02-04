import React from 'react'
import ProfilePanel from '../components/dashboard/ProfilePanel'
import Sidebar from '../components/dashboard/Sidebar'
import ProfileCard from '../components/dashboard/ProfileCard'
import Navbar from '../components/dashboard/Navbar'

function Profile() {
  return (
    <div className='page'>
          <Navbar />
          <div className='dashboard'>
              <div className="left-panel">
                <ProfileCard />
                <Sidebar/>
              </div>
              <div className="right-panel">
                <div className='card'>
                <ProfilePanel/>
                </div>
              </div>

          </div>
    </div>
  )
}

export default Profile
