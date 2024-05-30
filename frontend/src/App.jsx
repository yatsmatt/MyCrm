import {BrowserRouter,Routes,Route} from 'react-router-dom'
import  Error from './componenets/Error'
import  Home from './componenets/Home'
import Signin from './componenets/Signin'
import Header from './componenets/Header' 
import './App.css'
import Signup from './componenets/Signup'


function App() {
  return (
    <div>
       <BrowserRouter>
       <Header/>
       <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='signin' element={<Signin/>}/>
       <Route path='signup' element={<Signup/>}/>
       </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App
