import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Register({setToken}) {
    const [userInfo, setUserInfo] = useState({username:"", password:"", email:"", firstName:"", lastName:""})
    const navigate = useNavigate()
    const handleChange = (e)=>{
        const target = e.target
        const name = target.name
        const value = target.value
        setUserInfo((prevValue)=>{return{...prevValue, [name]:value}})
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(userInfo)
        //post our user to the database with fetch or axios
        //use the token we get back in the response to setToken
        setToken("53810957398165850931573638057187468174807478321847u3048642384721")
        localStorage.setItem("token","53810957398165850931573638057187468174807478321847u3048642384721" )
        navigate("/useraccount")
    }
    return (
      <>
        <form onSubmit={(e)=>{handleSubmit(e)}}>
            <label>
                username : 
                <input
                value ={userInfo.userName}
                onChange={(e)=>handleChange(e)}
                name="username"
                />
            </label>
            <label>
                password : 
                <input
                value ={userInfo.password}
                onChange={(e)=>handleChange(e)}
                name="password"
                type = "password"
                />
            </label>
            <label>
                first name : 
                <input
                value ={userInfo.firstName}
                onChange={(e)=>handleChange(e)}
                name="firstName"
                />
            </label>
            <label>
                last name : 
                <input
                value ={userInfo.lastName}
                onChange={(e)=>handleChange(e)}
                name="lastName"
                />
            </label>
            <label>
                email : 
                <input
                value ={userInfo.email}
                onChange={(e)=>handleChange(e)}
                name="email"
                type = "email"
                required
                />
            </label>
            <input  type="submit" value = "Click ME"/>
        </form>
      </>
    )
  }
  
  export default Register
  