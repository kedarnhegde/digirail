const {Client} = require('pg')
const express = require("express")


const client = new Client({
    user:"postgres",
    password:"rithikdutt",
    host:"localhost",
    port:5432,
    database:"daa"
})


module.exports = (req, res) => {
    const data = [req.body.username,req.body.email,req.body.password ]
    console.log(data)
    execute(data)
    // logic to save user in db
    // generate auth session
    // Cookie 
    // response sessionid
    // Session=>User DB store expiry
    // Front end /session/rithik 
     res.status(200).json( {message: "User registered successfully"} );
     res.redirect('/login')
  };


async function execute(data){
    await connect();
    await createacc(data)

}
async function connect(){
    try{
        await client.connect();
        console.log("Connected successfully!")
    }
    catch(e){
        console.log(`Error occured ${e}`)
        await client.query("ROLLBACK")
    }
}    
async function createacc(data){
    try{
        await client.query("insert into userss(username,email,password) values  ($1,$2,$3)",data);
        return true
    }
    catch(e){
        return false;
    }
}