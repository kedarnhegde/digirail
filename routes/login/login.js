const {Client} = require("pg")
const express = require("express")

const client = new Client({
  user:"postgres",
  password:"rithikdutt",
  host:"localhost",
  port:5432,
  database:"daa"
})

module.exports = async (req, res) => {
    const data1 = [req.body.email,req.body.password]
    const result = await execute(data1);
    
    if(!result){
      return res.status(404).send("401 Not found").json({message: "User login not successfull"});
    } 
    else{
      
      return res.status(200).json( {message: "User login successfully"} );
    }
    // logic to save user in db
    // generate auth session
    // Cookie 
    // response sessionid
    // Session=>User DB store expiry
    // Front end /session/rithik
    };

async function execute(data1){
  await connect();
  const results = await search(data1)
 
  if(!results){
    return(false)
  }
  else{
    return(true)
  }
}
async function connect(){
  try{
    await client.connect()
    console.log("Connected!")
  }
  catch(e){
    console.log(`Error occured ${e}`)
    await client.query("ROLLBACK")
  }
}
async function search(data1){
  try{
    
    const r = await client.query('select count(*) from userss where email =$1 AND password = $2',[data1[0],data1[1]]);
    
    
    if(r.rows[0]['count'] == 0){
      
      return(false)
    }
    else{
      return(true)
    }
    
  
  }
  catch(e){
    console.log(`Error ${e}`)
  }
}