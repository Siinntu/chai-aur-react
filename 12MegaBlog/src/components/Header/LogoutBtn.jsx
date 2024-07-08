import React from 'react'
import {useDispatch} from 'react-redux'
import { AuthService, authService } from '../../APPWRITE/auth'
import {logout} from '../../store/authslice'

export function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler= ()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }

    return (
       <button className='inline-block px-8 py-3 duration-200 hover:bg-blue-400 rounded-full'>Logout</button>
    )
}
