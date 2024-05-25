import { useState,useEffect } from 'react'
import {check} from "./Api/Api"
import './App.css'

function App() {

  const [message, setMessage] = useState('hi');

  useEffect(() => {
    check(message, setMessage)
  }, []);


  return (
    <>
       
       <h1>{message}</h1>
    </>
  )
}

export default App
