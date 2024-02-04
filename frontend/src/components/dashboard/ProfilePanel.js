import React, { useEffect, useState } from 'react'
import { useClubContext } from '../../hooks/useClubContext'
import { useAuthContext } from '../../hooks/useAuthContext'

function ProfilePanel() {
  const [name,setName] = useState('')
  const [desc,setDesc] = useState('')
  const [logo,setLogo] = useState('')
  const [discord,setDiscord] = useState('')
  const [instagram,setInstagram] = useState('')
  const [twitter,setTwitter] = useState('')
  const [website,setWebsite] = useState('')
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')

  const [currentPassword,setCurrentPassword] = useState('')

  const [error, setError] = useState(null)
  const [success, setSucess] = useState(null)



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
          setTwitter(json.socials.twitter && json.socials.twitter)
          setWebsite(json.socials.website && json.socials.website)
        }
      }
    }
    

    const handleSubmit = async (e) => {
      e.preventDefault();
  //do not refresh the page
     
      if(!password) {
        setPassword(currentPassword)
      }
      const updatedClub = { name, desc, logo, admin:{username,password},socials:{discord , instagram , twitter,website },oldPassword:currentPassword}
      console.log(updatedClub)
      if(!currentPassword){
        setError("Please enter current password to confirm update !")
      }
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
        setError(json.error)
      }
      if (response.ok) {
        setError(null)
        setSucess("Club informations has been updated successfully.")
  
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
       <label>Twitter :</label>
        <input placeholder="Club's twitter link" type='text' onChange={(e) => setTwitter(e.target.value)}  value={twitter} ></input>
          </div>
          <div>
        <label>Website :</label>
        <input placeholder="Club's website link" type='text' onChange={(e) => setWebsite(e.target.value)}  value={website} ></input>
          </div>


        </div>
        <div className='line'></div>
        <h4 className='text-center' > Admin login :</h4>
        <label>Username :</label>
        <input placeholder="Username" type='text' onChange={(e) => setUsername(e.target.value)}  value={username} ></input>
        <label>Password :</label>
        <input placeholder="new Password" type='password' onChange={(e) => setPassword(e.target.value)}  ></input>

        <div className='line'></div>
        <label>Current password :</label>
        <input placeholder="current password" type='password' onChange={(e) => setCurrentPassword(e.target.value)} required></input>

        <button>Update</button>
      </form>
    </div>
  )
}

export default ProfilePanel
