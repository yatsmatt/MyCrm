import React from 'react'
import { useState,useEffect } from 'react'
import {check} from "../Api/Api"
const Home = () => {
    const [message, setMessage] = useState('hi');

    useEffect(() => {
      check(message, setMessage)
    }, []);
  
  return (
    <div>
        
        <h1 className='text-red-600 text-6xl'>{message} </h1>
    </div>
  )
}

export default Home