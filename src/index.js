import ReactDOM from 'react-dom/client'
import {useState} from "react"
import React from 'react'

function App(){

    // use state to save response
    const [isLoggedIn, setIsLoggedIn] = useState(null)
    const [token, setToken] = useState(null)

    // const [username, setUsername] = useState("anais")
    // const [password, setPassword] = useState("pass123")

    
    // fetch request to login
    async function login(){
        try{
            const response = await fetch("http://localhost:8080/api/customers/login",
            {
                method : "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    "username": "anais",
                    "password": "pass123"
                })
                // body = login info
            })
            console.log("response", response)
            let result = await response.json()
            console.log("result", result)
            setIsLoggedIn(result)
            // setToken(result.token)

        }catch(err){
            console.log("unable to log in :(", err)
        }
    }

    login()

    return(
        // <h1>{isLoggedIn}</h1>
        <h1>hello</h1>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)
