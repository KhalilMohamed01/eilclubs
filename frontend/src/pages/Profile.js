import React, { useEffect } from 'react'
import ProfilePanel from '../components/dashboard/ProfilePanel'
import Sidebar from '../components/dashboard/Sidebar'
import ProfileCard from '../components/dashboard/ProfileCard'
import Navbar from '../components/dashboard/Navbar'
import { useClubContext } from '../hooks/useClubContext'
import { useAuthContext } from '../hooks/useAuthContext'

function Profile() {
  const {dispatch} = useClubContext()

  const {club} = useAuthContext()
  useEffect(() => {
    document.title = 'Eil-Clubs - Profile'

      const getClub = async () => {
          const response = await fetch('http://localhost:4000/api/clubs/' + club.club_id)
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
                
                <ProfilePanel/>
                
              </div>

          </div>
    </div>
  )
}

export default Profile
