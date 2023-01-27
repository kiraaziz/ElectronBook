import './../styles/style.css';
import Main from "./main"
import Login from "./login"
import {auth} from "./../firebase/firebaseConfigauth"
import {onAuthStateChanged, signOut} from "firebase/auth"
import { useState } from 'react';

function App() {

  const [access, setaccess] = useState(false)

  const [userdata, setuserdata] = useState(null)
  const [userUid, setuserUid] = useState(null)

  onAuthStateChanged(auth , (currentuser) => {
    if (currentuser !== null){
      setaccess(true)
      setuserdata(currentuser)
      setuserUid(currentuser.uid)
    }
  })

  const logout=()=>{
    signOut(auth).then(() => {
      setaccess(false)
    })
  }

  return (
    (access ? <Main userdata={userdata} uid={userUid} logout={()=>{logout()}}/> : <Login />)
  )
}

export default App