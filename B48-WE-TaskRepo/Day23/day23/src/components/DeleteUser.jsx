import axios from 'axios';
import React, { useState } from 'react'

function DeleteUser({users,fetchUsers}) {
  const [selectedUserId,setSelectedUserId] = useState('');
  const deleteUserProfile = async (event)=>{
      event.preventDefault();
      try {
          const response = await axios.delete(`http://localhost:3000/users/${selectedUserId}`)
          .then (response => {fetchUsers()});
          window.alert('Selected User Details hasbeen removed Successfully')
      }catch(error){
        console.log('error',error);
      }
  }
  const style = { 
    header : {
        textAlign : 'center',
        fontWeight : 'bold',
        padding :"10px" 
      },
    button : {
        borderRadius : '10px',
        padding:'5px 15px',
        fontWeight : 'bold',
        backgroundColor : '#0b87ed',
        border:'none',
    },
    label:{
      fontSize : '20px'
    },
    input :{
      borderRadius:'8px',
      padding:'5px',
      fontWeight : 'bold',
      backgroundColor : '#74b8f0',
      opacity:'0.5',
      border:'none',
      outline:'none'
    }
  }
  return (
    <div>
       
      <h2 style={style.header}>User Profile</h2>
      <form onSubmit={deleteUserProfile}>
        <label style={style.label}>
          Select UserId to View  : &nbsp;
          <select
            value={selectedUserId}
            onChange={(e)=>setSelectedUserId(e.target.value)}
            style={style.input}
            >
            <option>select an id</option>
              {
                users.map(user=> {
                  return <option key={user.id}>{ user.id }</option>
                })
              }
          </select>
        </label><br /><br />
        <button type='submit' style={style.button}>Delete Profile</button>
      </form>
    </div>
  )
}

export default DeleteUser;