import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
function App() {
  

  return (
    <UserContextProvider>
      <div className='bg-red-800'>Hello Context Api</div>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
