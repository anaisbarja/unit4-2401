import { Link, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Register from "./components/Register"
import UserAccount from "./components/UserAccount"
import { useState } from "react"


function App() {
  const [token,setToken]  =useState(localStorage.getItem("token")||false)
  const [user,setUser] = useState()
console.log(token)
  return (
    <>
    <div>
      <Link to= "/">Home</Link>
      <Link to= "/register">register</Link>
      {
        token &&
        <Link to = "/useraccount">Users</Link>
      }
   
    </div>
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/register" element ={<Register setToken={setToken}/>}/>
      <Route path="/useraccount" element ={<UserAccount token = {token}/>}/>
    </Routes>

    </>
  )
}

export default App
