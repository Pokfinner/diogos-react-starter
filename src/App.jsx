import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import usersJSON from './assets/users.json'
import UsersPage from './pages/UsersPage/UsersPage'
import NewUserPage from './pages/NewUserPage/NewUserPage'
import UserPage from './pages/UserPage/UserPage'
import EditUserPage from './pages/EditUserPage/EditUserPage'

function App() {

  const [users, setUsers] = useState(usersJSON)

  return (<>

    <Routes>
      <Route path='/' element={<UsersPage users={users} setUsers={setUsers} />} />
      <Route path='/new' element={<NewUserPage users={users} />} />
      <Route path='/:userId' element={<UserPage users={users} />} />
      <Route path='/edit/:userId' element={<EditUserPage users={users} />} />
      <Route path='*' element={<div>404 Page!</div>} />
    </Routes>

  </>)

}

// CRUD -> RD

export default App