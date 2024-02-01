import React, { useEffect } from 'react'

import Navbar from '../components/dashboard/Navbar'
import ProfileCard from '../components/dashboard/ProfileCard'
import Sidebar from '../components/dashboard/Sidebar'
import Container from '../components/dashboard/Container'


function Dashboard() {
  return (
    <div className='page'>
          <Navbar />
          <div className='dashboard'>
              <div className="left-panel">
                <ProfileCard />
                <Sidebar/>
              </div>
              <div className="right-panel">
                <Container/>
              </div>

          </div>
    </div>
  )
}

export default Dashboard
