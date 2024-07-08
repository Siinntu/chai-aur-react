import React,{ useState,useEffect } from 'react'
import {useDispatch} from 'react-redux';
import authService from './APPWRITE/auth';
import  {login,logout} from './store/authslice'
import { Header,Footer } from './components';
import { Outlet } from 'react-router-dom';

import './App.css'

function App() {
  const [loading, setloading] = useState(true)
  const dispatch =useDispatch()
  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData) => {
      if (userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=> setloading(false))
  }, [])

   return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-500'>
      <div className='w-full block'>
      <Header />
      <main>

      </main>
       <Footer />
    </div>
    </div>
   ) : null
}

export default App
