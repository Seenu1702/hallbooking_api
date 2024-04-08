/* eslint-disable no-unused-vars */
// import React from 'react';

function ListUser(props) {

    const {users} = props;
  const style = { 
    header : {
        textAlign : 'center',
        fontWeight : 'bold',
        padding :"10px" 
      }}
  return (
    <div>
      <h2 style={style.header}>All Users</h2>
      <div>
        {
          <ul>
              {users.map((user)=>
               <li key={user.id} style={{fontSize:'18px'}}> 
              {user.name}</li>)}
          </ul>
        }
      </div>
    </div>
  )
}

export default ListUser;