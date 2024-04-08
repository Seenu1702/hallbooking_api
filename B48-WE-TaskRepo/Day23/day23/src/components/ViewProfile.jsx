import axios from 'axios';
import React, { useState } from 'react';

function ViewProfile({users}) {
  const [selectedUserId,setSelectedUserId] = useState('');
  const [userName,setUserName] = useState('');
  const [userEmail,setUserEmail] = useState('');

  const fetchUserProfile = async (event)=>{
    event.preventDefault();
    try{
      const response = await axios.get(`http://localhost:3000/users/${selectedUserId}`)
      setUserName(response.data.name);
      setUserEmail(response.data.email);
      if (userName&& userEmail){
        let showUser = document.getElementById('choose-id-div');
        showUser.innerHTML = `<div>
        <label>User Id &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;${ selectedUserId }</label><br />
        <label>User Name&nbsp; :&nbsp; ${ userName }</label><br />
        <label>User E-Mail :&nbsp;${ userEmail }</label>
      </div>`
        console.log(showUser);
      }

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
      fontSize : '18px'
    },
    input :{
      borderRadius:'8px',
      padding:'5px',
      fontWeight : 'bold',
      backgroundColor : '#74b8f0',
      border:'none',
      outline:'none',
      opacity:'0.5'
    }
  }
  return (
    <div>
      <h2 style={style.header}>User Profile</h2>
      <div id='choose-id-div'>
        
        <form onSubmit={fetchUserProfile}>
          <label style={style.label}>
            Select UserId to View Profile :
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
          <button type='submit' style={style.button}>View Profile</button>
        </form>
      </div>
      
    </div>
  )
}

export default ViewProfile;