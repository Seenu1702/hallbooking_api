import axios from 'axios';
import React, { useEffect, useState } from 'react'

function UpdateUser({selectedUserId,fetchUsers}) {

    const [selectedUser,setSelectedUser] = useState('');
    const [editedUser,SetEditedUser] = useState('');
    const [editedEmail,setEditedEmail] = useState('');
    
    const fetchUser= async()=>{
        try {
            if (selectedUserId !== 'select an id'){
                const response = await axios.get
                (`http://localhost:3000/users/${selectedUserId}`)
                if (response.data){
                    setSelectedUser(response.data);
                    SetEditedUser(response.data.name);
                    setEditedEmail(response.data.email);
                }
            }
        }catch (error){
            console.log('error',error);
        }
    }

    useEffect(()=>{
      fetchUser();
    },[selectedUserId]);

    const updateUser= async (event)=>{
        event.preventDefault();
        let updatedUser = {
            id : selectedUserId,
            name : editedUser,
            email:editedEmail
        }
        const response = await axios.put(`http://localhost:3000/users/${selectedUserId}`,updatedUser)
        .then(respon => 
            fetchUsers()
        )
        SetEditedUser('');
        setEditedEmail('');
        window.alert('Selected User Details has been Updated Successfully.')
    }
    const style = { 
        header : {
            textAlign : 'center',
            fontWeight : 'bold',
            padding :"10px" 
          },
        button : {
            borderRadius : '10px',
            padding:'5px 25px',
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
          opacity :'0.5',
          backgroundColor : '#74b8f0',
          border:'none',
          outline:'none'
        }
      }
  return (
    <div>
        <form onSubmit={updateUser}>
        <label style={style.label}>
           UserName : &nbsp; 
            <input 
                value={editedUser}
                onChange={(e)=>SetEditedUser(e.target.value)}
                style={style.input}
            />
        </label>
        <br />
        <br /> 
        <label style={style.label}> 
            E-Mail &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;
            <input 
                value={editedEmail}
                onChange={(e)=>setEditedEmail(e.target.value)}
                style={style.input}
            />
        </label><br /><br />
        <button type='submit' style={style.button}>Update</button>
        </form>   
    </div>
  )
}

export default UpdateUser

