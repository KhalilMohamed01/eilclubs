import React, { useState } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext';
import { useDashboardContext } from '../../hooks/useDashboardContext';



function AddEventForm() {
  const {dispatch} = useDashboardContext()
  const {club} = useAuthContext()

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [poster, setPoster] = useState('')
  const [date, setDate] = useState('')
  const [error, setError] = useState(null)
  const rootUrl = process.env.NODE_ENV === 'production' ? 
  'https://eilclubs-api-git-test-khalilmohamed01s-projects.vercel.app' : 'http://localhost:4000'
   
  const handleSubmit = async (e) => {
    e.preventDefault();
//do not refresh the page
    if(!club){
      setError('You must be logged in')
      return 
    }
    const event = { title, desc, poster, date }
    
    const response = await fetch(rootUrl +'/api/events', {
      method: 'POST',
      body: JSON.stringify(event),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${club.token}`
      }
    })
    const json = await response.json()
    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setTitle('')
      setDesc('')
      setPoster('')
      setDate('')
      setError(null)
      dispatch({type: 'CREATE_EVENT',payload:json})
    }
  }

  return (
  <div className=''>
    <form className='event-form' onSubmit={handleSubmit}>

          <h2>ADD EVENT :</h2>
          {error && <div className='error'>{error}</div>}          <label>Title :</label>
          <input placeholder="Event's title" type='text' onChange={(e) => setTitle(e.target.value)} value={title} required></input>
          <label>Desc :</label>
        <textarea placeholder="Event's description" onChange={(e) => setDesc(e.target.value)} value={desc} required></textarea>  
          <label>Poster :</label>
          <input placeholder="Poster URL" type='text' onChange={(e) => setPoster(e.target.value)} value={poster} required></input>
        <label>Date</label>
          <input type='date' onChange={(e) => setDate(e.target.value)} value={date} required></input>
      <button>Add Event</button>
      
     
    </form>
  </div>
  )
}

export default AddEventForm
