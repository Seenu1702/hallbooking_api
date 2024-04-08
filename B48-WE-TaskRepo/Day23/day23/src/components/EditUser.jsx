import React, {  useState } from 'react';
import UpdateUser from './UpdateUser';

function EditUser({ fetchUsers,users }) {

  const [selectedUserId,setSelectedUserId] = useState('select an id');
  const selectHandler=(event)=>{
    setSelectedUserId(event.target.value);
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
      opacity :'0.5',
      backgroundColor : '#74b8f0',
      border:'none',
      outline:'none'
    }
  }
  return (
    <div>
      <h2 style={style.header}>Edit User </h2>
      <div>
        <form>
          <label style={style.label}>
            Select User ID to Edit : &nbsp;
            <select 
              onChange={selectHandler}
              value={selectedUserId}
              style={style.input}
            >
              <option disabled>select an id</option>
              {
                users.map(user=>{
                  return <option key={user.id}>{ user.id }</option>
                })
              }
            </select>
          </label>
        </form>
      </div>
      <br />
      <div>
        { selectedUserId!== 'select an id' && <UpdateUser selectedUserId={ selectedUserId } fetchUsers={ fetchUsers }/>}
      </div>
    </div>
  )
}

export default EditUser;