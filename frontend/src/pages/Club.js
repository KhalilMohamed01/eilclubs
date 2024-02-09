import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Club(props) {
    const params = useParams();
    const [club,setClub] = useState();



    useEffect(() =>{
      const getClub = async (id) => {
        const response = await fetch('/api/clubs/' + id) 
        const club = await response.json()
        console.log(club)  
        setClub(club) 
    }
        getClub(params.id)
 
    },[])
  return (
    <div>
        {club?.name}
      hello 
    </div>
  )
}

export default Club
