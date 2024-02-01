import React, { useEffect, useState } from 'react'
import { useDashboardContext } from '../../hooks/useDashboardContext';
import { useAuthContext } from '../../hooks/useAuthContext';
import moment from 'moment';



function EditEventForm({event}) {

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [poster, setPoster] = useState('')
  const [date, setDate] = useState('')
  const [error, setError] = useState(null)


      const {dispatch} = useDashboardContext()  

    const {user} = useAuthContext()

    const getEventData = async () => {
      const response = await fetch('/api/events/' + event)
      const json = await response.json()
      console.log(json)
      if(response.ok){
        let dateFormated = moment(json.date).format('YYYY-MM-DD');
        setTitle(json.title)
        setDesc(json.desc)
        setPoster(json.poster)
        setDate(dateFormated)

      }

      }
    

   
  const handleSubmit = async (e) => {
    e.preventDefault();
//do not refresh the page
   
    const event = { title, desc, poster, date }
    
    const response = await fetch('/api/events', {
      method: 'PATCH',
      body: JSON.stringify(event),
      headers: {
        'Content-Type': 'application/json'
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
    useEffect(() => {
     getEventData() 
      },[])
  return (
    <form className='event-form' onSubmit={handleSubmit}>

          <h2>Edit EVENT :</h2>
          {error && <div className='error'>{error}</div>}          <label>Title :</label>
          <input placeholder="Event's title" type='text' onChange={(e) => setTitle(e.target.value)} value={title} required></input>
          <label>Desc :</label>
        <textarea placeholder="Event's description" onChange={(e) => setDesc(e.target.value)} value={desc} required></textarea>  
          <label>Poster :</label>
          <input placeholder="Poster URL" type='text' onChange={(e) => setPoster(e.target.value)} value={poster} required></input>
        <label>Date</label>
          <input type='date' onChange={(e) => setDate(e.target.value)} value={date} required></input>
      <button>Confirm</button>
      
     
    </form>
  )
}

export default EditEventForm
