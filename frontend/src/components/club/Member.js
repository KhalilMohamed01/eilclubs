import React from 'react'

function Member({member}) {

  return (
    
        <div key={member._id} className="card member-card">
            {console.log(member)}
                      <img src={member.avatar} alt={member.lname} />
                      <div className="text-center event-info space">
                          <div className=' title'>{member.lname} { member.fname} </div>
                          <p>{member.role}</p>
                          <p>Discord : {member.discord}</p>

                      </div>
                      </div>
  )
}

export default Member
