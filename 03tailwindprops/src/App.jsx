import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Card from './Card'

function App() {
  let myobj = {
    username: 'sintu',
    age:21
  }

  return (
    <>
     <h1 className='bg-green-500 text-black rounded-9xl text-2xl '>TAILWIND CSS</h1>
    
    <Card username='chaiaurcode' profession='software engineer' />
    <Card username='halchal' profession='software engineer' />
    </>
  )
}

export default App;
