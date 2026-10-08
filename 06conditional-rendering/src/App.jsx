import { useState } from 'react'
import './App.css'
import LoginBtn from './components/LoginBtn'
import LogoutBtn from './components/LogoutBtn';

function App() {

  const[isLoggedIn, setLoggedIn] = useState(true)
  
  
  // if(isLoggedIn){
  //   return(
  //     <LogoutBtn />
  //   )
  // }
  // else{
  //   <LoginBtn />
  // }
}

export default App
