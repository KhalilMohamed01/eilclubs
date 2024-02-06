import React, { useEffect, useState } from 'react'
import { useClubContext } from '../../hooks/useClubContext'
import { useAuthContext } from '../../hooks/useAuthContext'

function ProfilePanel() {
  const [name,setName] = useState('')
  const [desc,setDesc] = useState('')
  const [logo,setLogo] = useState('')
  const [discord,setDiscord] = useState('')
  const [instagram,setInstagram] = useState('')
  const [website,setWebsite] = useState('')
  const [username,setUsername] = useState('')


  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)



  const {clubData,dispatch} = useClubContext()  
  const {club} = useAuthContext()

    const getClubData = async () => {
      console.log(clubData)
      const response = await fetch('/api/clubs/' + clubData._id)
      const json = await response.json()
      if(response.ok){
        setName(json.name && json.name)
        setDesc(json.desc && json.desc)
        setLogo(json.logo && json.logo)
        setUsername(json.admin.username && json.admin.username)
        if(json.socials){
          setDiscord(json.socials.discord && json.socials.discord)
          setInstagram(json.socials.instagram && json.socials.instagram)
          setWebsite(json.socials.website && json.socials.website)
        }
      }
    }
    

    const handleSubmit = async (e) => {
      e.preventDefault();
  //do not refresh the page
     

      const updatedClub = { name, desc, logo,socials:{discord , instagram ,website }}

      const response = await fetch('/api/clubs/'+ clubData._id, {
        method: 'PATCH',
        body: JSON.stringify(updatedClub),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${club.token}`
        }
      })
      const json = await response.json()
      console.log(json)

      if (!response.ok) {
        setSuccess(null)
        setError(json.error)
      }
      if (response.ok) {
        setError(null)
        setSuccess("Club informations has been updated successfully.")
        dispatch({type: 'UPDATE_CLUB',payload:json})

  
      }
  
    }

    useEffect(() => {
      console.log(clubData)
      if(clubData){
         getClubData() 
      }
    
      },[dispatch,clubData])
  return (
    <div>
      <div className='card'>
      <form className='profile-form' onSubmit={handleSubmit}>
      {success && <div className='sucess'>{success}</div>}
          {error && <div className='error'>{error}</div>}       
        <h4 className='text-center' >Club's informations :</h4>
        <label>Name :</label>
        <input placeholder="Club's name" type='text'  onChange={(e) => setName(e.target.value)}  value={name} required></input>
        <label>Description :</label>
        <textarea placeholder="Clubs's description" onChange={(e) => setDesc(e.target.value)}  value={desc} required></textarea>  
        <label>Logo :</label>
        <input placeholder="Club's logo" type='text' onChange={(e) => setLogo(e.target.value)}  value={logo} required></input>

        <div className='line'></div>
        <h4 className='text-center' > Socials :</h4>
        <div className='socials-form'>
          <div> 
            <label>Discord :</label>
            <input placeholder="Club's discord link" type='text' onChange={(e) => setDiscord(e.target.value)}  value={discord}  ></input>
          </div>
          <div>
          <label>Instagram :</label>
        <input placeholder="Club's instagram link" type='text' onChange={(e) => setInstagram(e.target.value)}  value={instagram} ></input>
          </div>
          <div>
        <label>Website :</label>
        <input placeholder="Club's website link" type='text' onChange={(e) => setWebsite(e.target.value)}  value={website} ></input>
          </div>


        </div>

        <button>Update</button>
      </form>
    </div>
    </div>
  )
}

export default ProfilePanel
