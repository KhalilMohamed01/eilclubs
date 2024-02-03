import React from 'react'

import { useAuthContext } from '../../hooks/useAuthContext'

function ProfileCard() {
  const { club } = useAuthContext()
  return (
    <div className='card profile-card'>
          <img className='profile-img' src="EILTECH.jpg" alt="club logo" />
          {club && <h2>Name here</h2>}
    </div>
  )
}

export default ProfileCard
