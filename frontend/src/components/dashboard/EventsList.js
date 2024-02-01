import React, { useEffect } from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";

import EventCard from './EventCard';
import Dialog from '../Dialog';
import AddEventForm from './AddEventForm';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useDashboardContext } from '../../hooks/useDashboardContext';


function EventsList() {
    const {events,dispatch} = useDashboardContext()

    const {user} = useAuthContext()
    useEffect(() => {
        const fetchEvents = async () => {
            const response = await fetch('/api/events/')
            const json = await response.json()
            if (response.ok) {
              dispatch({ type: 'SET_EVENTS',payload:json })
            }
        }
        if(user){
            fetchEvents()
        }
        
    },[dispatch,user])

 
    return (
        <div className='events-list'>
            <Dialog trigger={(
                <div className='action-card'>
                    <i><IoMdAddCircleOutline/></i>
                    Add new event
                </div>
            )}><AddEventForm/></Dialog> 
            {events && events.map((event) => (
                <EventCard key={event._id} event={event}/>
            ))}

        </div>
    )
}

export default EventsList
