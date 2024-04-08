import { useEffect, useState } from 'react'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import ListUser from './components/ListUser'
import CreateUser from './components/CreateUser'
import EditUser from './components/EditUser'
import ViewProfile from './components/ViewProfile'
import axios from 'axios'
import DeleteUser from './components/DeleteUser'
import './App.css'


function App() {

  
  const [users , setUsers] = useState([]);
 
  
  let fetchUsers= async ()=>{
    try {
     await axios.get('http://localhost:3000/users/')
     .then(response =>  setUsers(response.data))
      }catch (error){
      console.error('error',error);
    }
  }
 
  useEffect(()=>{
    fetchUsers();
  },[])

  return (
    <Router>
    <div className='grid-container'>
      <div className='grid-item-1'>
        <h1 >UI Implement to CRUD</h1>
      </div>
        <div className="grid-item-2">
          <Link to="/"  className='link'>DashBoard</Link>
          <Link to='/users' className='link'>List Users</Link>
          <Link to='/create-user' className='link'>Create User</Link>
          <Link to='/edit-user/:id' className='link'>Edit User</Link>
          <Link to='/profile/:id' className='link'>View Profile</Link>
          <Link to='/delete-user/:id' className='link'>Delete User</Link>         
        </div>
          <div className='grid-item-3'>
            <Routes>
              <Route path='/' element={<Dashboard users={ users }/>}></Route>
              <Route path='/users' element={<ListUser users={ users }/>}></Route>

              <Route path='/create-user' element={<CreateUser fetchUsers={fetchUsers}/>}></Route>

              <Route path='/edit-user/:id' element={<EditUser fetchUsers={fetchUsers} users={ users }/>}></Route>

              <Route path='/profile/:id' element={<ViewProfile users={ users }/>}></Route>

              <Route path='/delete-user/:id' element={<DeleteUser users={users} fetchUsers={ fetchUsers }/>}></Route>
            </Routes>
          </div>
    </div>   
  </Router>
  )
}
export default App