import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function ClubSection() {
    const [clubs,setClubs] = useState();



    useEffect(() =>{
      const getClubs = async () => {
        const response = await fetch('/api/clubs/')
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