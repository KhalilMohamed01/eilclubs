import React, { useEffect } from 'react'

import Navbar from '../components/dashboard/Navbar'
import ProfileCard from '../components/dashboard/ProfileCard'
import Sidebar from '../components/dashboard/Sidebar'
import { useClubContext } from '../hooks/useClubContext'
import { useAuthContext } from '../hooks/useAuthContext'


function Dashboard() {

  const {dispatch} = useClubContext()
  const rootUrl = process.env.NODE_ENV === 'production' ? 
  'https://eilclubs-api.vercel.app' : 'http://localhost:4000'
  const {club} = useAuthContext()
  useEffect(() => {
      const getClub = async () => {
          const response = await fetch(rootUrl + '/api/clubs/' + club.club_id)
          const json = await response.json()  
                  console.log(json)

          if (response.ok) {
            dispatch({ type: 'SET_CLUB',payload:json })
          }
      }
      if(club){
          getClub()
      }
      
  },[dispatch,club])
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
                Stats
                </div>
              </div>

          </div>
    </div>
  )
}

export default Dashboard
