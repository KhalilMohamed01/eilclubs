import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { FaCircleChevronLeft } from "react-icons/fa6";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import Member from '../components/club/Member';
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";





function Club(props) {
    const params = useParams();
    const [club,setClub] = useState();
    const [events,setEvents] = useState();
    const [isLoaded,setisLoaded] = useState(false)


    const rootUrl = process.env.NODE_ENV === 'production' ? 
    'https://eilclubs-api.vercel.app' : 'http://localhost:4000'

    useEffect(() =>{
      const getClub = async (id) => {
        const response = await fetch(rootUrl + '/api/clubs/' + id) 
        const club = await response.json()
        document.title = club.name
        console.log(club)  
        setClub(club) 
    }
    const getEventsByClub = async (id) => {
      const response = await fetch(rootUrl + '/api/events/club/' + id) 
      const events = await response.json()
      console.log(events)  
      setEvents(events) 
  }
        getClub(params.id)
        getEventsByClub(params.id)
        
 
    },[])
  return (
<div className='page'>
    
    <Link to="/"><h1><FaCircleChevronLeft/></h1></Link>  
         {club && <div className='dashboard'>
              <div className="left-panel">

                <div className='card club-profile'>
                      <img src={club?.logo}></img>
                      <h2>{club?.name}</h2>
                      <div className='club-socials'>
                      <a href={club?.socials.discord}><FaDiscord/></a>
                        <a href={club?.socials.instagram}><FaInstagram/></a>
                        <a href={club?.socials.website}><TbWorld/></a>
                        </div>
                </div>

              </div>
              <div className="right-panel">
              <div className='card club-info-card'>
                  <h2>Description du club : </h2>
                  <p>{club?.desc} {!club?.desc && "Ce club n'a pas encore de descriprion"}</p>
              </div>
              <div className='card club-info-card'>
              <h2>Les évènements du club : </h2>
                  <div className='club-events-card'>
                    {events && events.map((event) => {
                      return <div key={event._id} className="card event-card">
                      <img src={event.poster} alt={event.title} />
                      <div className="event-info space">
                          <div className='title'>{event.title} </div>
                          <div className='date'>{formatDistanceToNow(new Date(event.date),{addSuffix:true})}</div>
                      </div>
                      </div>
                    })}
                  </div>
              </div>

              <div className='card club-info-card'>
              <h2>Les membres du club : </h2>
                  <div className='club-members'>
                    {club && club.members.map((member) => {
                      return <Member member={member}/>
                    })}
                              
                  </div>
              </div>
              </div>

          </div>}
    </div>
  )
}

export default Club
