import React from 'react'

import { useClubContext } from '../../hooks/useClubContext'

function ProfileCard() {
  const {clubData} = useClubContext()
  return (
     <div className='card profile-card'>
          {clubData && <><img className='profile-img' src={clubData.logo} alt="club logo" />
          <h2>{clubData.name}</h2></>}
    </div>
  )
}

export default ProfileCard
