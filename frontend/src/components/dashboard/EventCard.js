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
    const {club} = useAuthContext()
    const handleDelete = async () => {
        if(!club){
            return
        }
        const response = await fetch('/api/events/' + event._id,{
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
    <div className="event-info flex space">
        <h5>{event.title} {event._id}</h5>
        <h5>{formatDistanceToNow(new Date(event.date),{addSuffix:true})}</h5>
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
