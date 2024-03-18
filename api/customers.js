const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")

router.get("/login", async(req, res)=>{
    try{
        const {username, password} = req.body
       
        // get customer by username

        // use bcrypt.compare to compare given password with actual password

        // if match, you have logged in successfully

    }catch(err){

    }
})