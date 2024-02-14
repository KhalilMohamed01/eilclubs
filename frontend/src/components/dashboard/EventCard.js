import React from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDashboardContext } from '../../hooks/useDashboardContext';
import Dialog from '../Dialog';
import EditEventForm from './EditEventForm';

import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useAuthContext } from '../../hooks/useAuthContext';

function EventCard( {event}) {
    const {dispatch} = useDashboardContext()
    const rootUrl = process.env.NODE_ENV === 'production' ? 
    'https://eilclubs-api-git-test-khalilmohamed01s-projects.vercel.app' : 'http://localhost:4000'
    const {club} = useAuthContext()
    const handleDelete = async () => {
        if(!club){
            return
        }
        const response = await fetch(rootUrl +'/api/events/' + event._id,{
            method:'DELETE',
            headers: {
                'Authorization': `Bearer ${club.token}`
              }
        })

        const json = await response.json()
        if(response.ok){
                dispatch({type:'DELETE_EVENT',payload:json})
        }

    }
  return (
    <div  className="card event-card">
    <img src={event.poster} alt={event.title} />
    <div className="event-info space">
        <div className='title'>{event.title} </div>
        <div className='date'>{formatDistanceToNow(new Date(event.date),{addSuffix:true})}</div>
    </div>
    <div className="event-tools">
    <Dialog trigger={
        <div className='card card-action'>
        <FaEdit />
    </div>
            }><EditEventForm event={event._id}/></Dialog> 

            
        <div onClick={handleDelete} className='card card-action'>
                <MdDelete />
            </div>
    </div>
</div>
  )
}

export default EventCard
