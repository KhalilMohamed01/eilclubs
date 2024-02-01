import React from 'react'

import { useAuthContext } from '../../hooks/useAuthContext'

function ProfileCard() {
  const { user } = useAuthContext()
  return (
    <div className='card profile-card'>
          <img className='profile-img' src="EILTECH.jpg" alt="club logo" />
          {user && <h2>{user.username}</h2>}
    </div>
  )
}

export default ProfileCard
