import React, { useEffect } from 'react'
import { FaUserPlus } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useClubContext } from '../../hooks/useClubContext';
import { useAuthContext } from '../../hooks/useAuthContext';


function MembersPanel() {

    const {clubData,dispatch} = useClubContext()  
    console.log(clubData.members)

    const {club} = useAuthContext()
    var count = Object.keys(clubData.members).length;
    console.log(count)
    const rootUrl = process.env.NODE_ENV === 'production' ? 
    'https://eilclubs-api.vercel.app' : 'http://localhost:4000'
    useEffect(() => {
        const getClub = async () => {
            const response = await fetch(rootUrl +'/api/clubs/' + club.club_id)
            const json = await response.json()  
                    console.log(json)
  
            if (response.ok) {
              dispatch({ type: 'SET_CLUB',payload:json })
            }
        }
        if(club){
            getClub()
        }
        
    },[dispatch,club])

  return (
    <div className='members-panel'>
      <button className='card add-btn'><FaUserPlus />&nbsp;Add</button>
      <div className='card members-panel-content'>
      <table className='members-table'>
      <tr>
            <th>Member</th>
            <th>Role</th>
            <th>Action</th>
    </tr>
        {count === 0 && <p className='text-center'>There is no members found.</p>}
        {clubData.members && clubData.members.map((member)=>{
            return (
              <tr key={member._id}>
            <td>{member.fname} {member.lname}</td>
            <td>{member.discord}</td>
            <td><FaUserEdit /> <MdDelete /></td>
        </tr>)
                
        })}
  

       </table>
      </div>
    </div>
  )
}

export default MembersPanel
