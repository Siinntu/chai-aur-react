import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Github = () => {
    const [data,setdata] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/Siinntu/followers')
       .then(res => res.json())
       .then(data =>{ 
        console.log(data)
        setdata(data)})
    },[])
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            Github followers: {data.followers}
            <img src={data.avatar_url} alt="" />
        </div>
    );
}

export default Github;
