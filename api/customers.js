const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
// const customerFunctions = require('../db/customers')
const {getAllCustomers} = require('../db')


router.get("/", async(req, res, next)=>{
    try{
        const customers = await getAllCustomers()

        console.log("Welcome")

        console.log(customers)
       res.send(customers)

    }catch(err){

    }
})
 

// router.post("/login/:id", async(req, res, next)=>{
//     try{
//         const {id} = req.params
//         const username= req.body.username
//         const password = req.body.password
//         const customer = await customerFunctions.getACustomer(id)
//         const dbUserName = customer.username
//         const dbPassword = customer.password
//         if(username.toUpperCase() !== dbUserName.toUpperCase()){
//            res.status(400).send("Something is wrong")
//            next()
//         }

//         console.log("Welcome")
//        res.send("Test building")
//         // get customer by username


//         // use bcrypt.compare to compare given password with actual password

//         // if match, you have logged in successfully

//     }catch(err){

//     }
// })
 
module.exports = router