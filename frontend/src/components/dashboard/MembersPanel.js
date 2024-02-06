import React from 'react'
import { FaUserPlus } from "react-icons/fa";
import { useClubContext } from '../../hooks/useClubContext';
import { useAuthContext } from '../../hooks/useAuthContext';


function MembersPanel() {

    const {clubData,dispatch} = useClubContext()  
    console.log(clubData)
    const {club} = useAuthContext()

  return (
    <div className='members-panel'>
      <button className='card add-btn'><FaUserPlus />&nbsp;Add</button>
      <div className='card members-panel-content'>
      <table className='members-table'>
        {!clubData.members &&         <><tr>
            <th>Member</th>
            <th>Role</th>
            <th>Action</th>
        </tr><tr>There is no members.</tr></>}

        <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
        </tr>
        <tr>
            <td>Berglunds snabbköp</td>
            <td>Christina Berglund</td>
            <td>Sweden</td>
        </tr>
        <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
        </tr>
        <tr>
            <td>Ernst Handel</td>
            <td>Roland Mendel</td>
            <td>Austria</td>
        </tr>
       </table>
      </div>
    </div>
  )
}

export default MembersPanel
