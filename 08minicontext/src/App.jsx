import { useState } from 'react'

import './App.css'
import UserContext from './Context/UserContext'
import UserContextprovider from './Context/UserContextprovider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  

  return (
    <UserContextprovider>
     <h1>react with siintu</h1>
     <Login />
     <Profile />
    </UserContextprovider>
  )
}

export default App;
