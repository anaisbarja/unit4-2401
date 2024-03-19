const client = require("./client")
const {createCustomer} = require("./")


async function dropTables(){
    try{
        // TODO - switch order
        await client.query("drop table if exists orders")
        await client.query("drop table if exists customers")
    }catch(err){
        console.log("oh nose, failed dropping tables!", err)
    }
}

// customers / orders
// orders has a reference to customers

async function createTables(){
    try{
        // TODO - switch order
        await client.query(`
        create table customers(
            id serial primary key,
            username varchar(255),
            password varchar(255)
        );
        `)
        await client.query(`
        create table orders(
            id UUID primary key Default genrandomuuid(),
            item varchar(255),
            customerid integer references customers(id)
        );
        `)
       // await client.query("drop table if exists orders")
    }catch(err){
        console.log("oh nose, failed dropping tables!", err)
    }
}

async function insertData(){

    
    await createCustomer({
        username:"anais", 
        password:"pass123"})

    await createCustomer({
        username:"nishant", 
        password:"supersecret"})
}



async function rebuild(){
    try{
        client.connect()
      //  await dropTables()
        await createTables()
        await insertData()

    }catch (error){
        console.log("Oh nose, failed rebuilding database", error)
    }
}
// async function runRebuild(){
//     await rebuild
//     client.end()
// }
// runRebuild()

rebuild().finally(()=>client.end())