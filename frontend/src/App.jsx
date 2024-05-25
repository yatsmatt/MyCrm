import { useState,useEffect } from 'react'
import {check} from "./Api/Api"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import  Error from './componenets/Error'
import './App.css'


function App() {

  const [message, setMessage] = useState('hi');

  useEffect(() => {
    check(message, setMessage)
  }, []);


  return (
    <div>
        <h1 className='text-red-600 text-6xl'>{message} </h1>
       {/* <BrowserRouter>
       <Routes>
       <Route path='' element={</>}/>
       </Routes>
       </BrowserRouter> */}
       
    </div>
  )
}

export default App
