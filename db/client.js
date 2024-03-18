const {Client} = require("pg")

let DATABASE_URL = process.env.DATABASE_URL || "postgres://localhost:5432/luigis_pizzeria2401"

const client = new Client({connectionString: DATABASE_URL, ssl: process.env.NODE_ENV === "production" ? {rejectUnauthorized:false}:undefined})

module.exports = client
