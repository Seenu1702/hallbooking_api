import axios from 'axios';
import { useState } from 'react';

function CreateUser({fetchUsers}) {

  const [userName , setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const  handleButtonClick =  (event)=>{
    event.preventDefault()
    
      let newUserObj = {
        name : userName,
        email : userEmail 
      }
      axios
      .post('http://localhost:3000/users/', newUserObj)
       .then (response => {
        fetchUsers();
       })
      setUserName('');
      setUserEmail('');
      window.alert('User Created Successfully')
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
      backgroundColor : '#74b8f0',
      border:'none',
      outline:'none'
    }
  }

  return (
    <div>
      <h2 style={style.header}>Create User</h2>
      <form onSubmit={handleButtonClick}>
          <label style={style.label}>
            UserName : &nbsp;
            <input 
              onChange={(event)=> setUserName(event.target.value)}
              value={userName}
              placeholder='enter username here...'
              style={style.input}
              required
            />
          </label>
          <br /><br />
          <label style={style.label}>
            E-Mail &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;
            <input 
              onChange={(event)=> setUserEmail(event.target.value)}
              value={userEmail}
              placeholder='enter e-mail here...'
              style={style.input}
              required
            />
          </label>
          <br /><br />
          <button type='submit' style={style.button}>Add User</button>
        </form>
    </div>
  )
}

export default CreateUser;