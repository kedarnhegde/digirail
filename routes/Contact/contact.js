const {Client} = require('pg');
const express = require('express');

const client = new Client({
    user:"postgres",
    password :"rithikdutt",
    host : "localhost",
    port:5432,
    database:"daa",
})

module.exports = (req,res) => {
    const data = [req.body.firstname , req.body.lastname , req.body.number]
    const results = execute(data)
    console.log(results)
    if(!results){
        return res.status(404).send("404 Not found").json({message: "User login not successfull"});
    }
    else{
        return res.status(200).json( {message: "User login successfully"} );
    }
}
async function execute(data){
    await connect();
    const result = await check(data)
    console.log(result)

    if(result === true){
        return(true)
    }
    else{
        return(false)
    }
}
async function connect(){
    try{
        await client.connect()
        console.log("COnnected!")
    }
    catch(e){
        console.log(`Error occured ${e}`)
    }
}
async function check(data){
    try{
        await client.query("insert into contactus(firstname,lastname,contactno) values($1,$2,$3)",data)
        return(true)
    }
    catch(e){
        console.log(`Error in inserting ${e}`)
        return(false)
    }
}
