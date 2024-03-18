const client = require("./client")
const bcrypt = require("bcrypt")
const salt_count = 5


async function createCustomer({username, password}){
    try{
        let hashedPassword = await bcrypt.hash(password, salt_count)

        const {rows} = await client.query(`
        insert into customers(username, password)
        values ($1, $2) returning *;
        `, [username, hashedPassword])

        console.log(rows)
        
    }catch(err){
        console.log("oh nose, failed creating customer", err)
    }
}

module.exports = {
    createCustomer
}