import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function ClubSection() {
    const [clubs,setClubs] = useState();

    const rootUrl = process.env.NODE_ENV === 'production' ? 
    'https://eilclubs-api.vercel.app' : 'http://localhost:4000'

    useEffect(() =>{
      const getClubs = async () => {
        const response = await fetch(rootUrl +'/api/clubs/')
        const clubs = await response.json()  
        setClubs(clubs) 
    }
        getClubs()
 
    },[])
  return (
    <div className='club-section'>
      <div className='club-section-title'>
        <h2>CLUBS</h2>
      </div>
      <div className='clubs-container'>
        {clubs && clubs.map((club) => (
           <Link to={{
            pathname: '/club/' + club._id,
        }}> <div  onClkey={club._id} className='card profile-card'>
            <img className='profile-img' src={club.logo} alt="club logo" />
            <h2>{club.name}</h2>
            </div></Link>

          )
        )}

      </div>
    </div>
  )
}

export default ClubSection
