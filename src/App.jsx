import { useState } from 'react'
import './App.css'
import SignUp from './components/SignUpForm'
import Authenticate from './components/Authenticate'

export default function App() {

  const [token, setToken] = useState(null);
  
  return (
    <>
      
     
      <div className="styledDiv"> 
      <SignUp token={token} setToken={setToken}></SignUp>
      <Authenticate token={token} setToken={setToken}></Authenticate>
      </div>
    
    </>
  );
}


