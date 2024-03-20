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
        console.log("oh nose, failed creating customer here", err)
    }
}

async function getACustomer(id){
    try{
        const SQL = `
        SELECT * FROM customers
        WHERE id = $1
        `
        const response = await client.query(SQL,[id])
        console.log(response.rows[0])
        return response.rows[0]
    }catch(err){
        console.log("oh nose, failed creating customer there", err)
    }
}

async function getCustomerbyUsername(username){
    try{
        const SQL = `
        SELECT * FROM customers
        WHERE username = $1
        `
        const response = await client.query(SQL,[username])
        console.log(response.rows[0])
        return response.rows[0]
    }catch(err){
        console.log("oh nose, failed creating customer there", err)
    }
}

async function getAllCustomers(){
    try{
        // const SQL = `
        // SELECT * FROM customers
        // `
        // const response = await client.query(SQL)
        // console.log(response.rows)
        // return response.rows

        const {rows} = await client.query("SELECT * FROM customers")
        return rows
    }catch(err){
        console.log("oh nose, failed creating customer everywher", err)
    }
}

module.exports = {
    createCustomer,
    getACustomer,
    getAllCustomers,
    getCustomerbyUsername
}