const {Client} = require("pg");
const express = require("express");

const client = new Client({
    user:"postgres",
    password:"rithikdutt",
    host:"localhost",
    port:5432,
    database:"daa"
})

module.exports = async (req,res)=> {
    const datai = [req.body.source,req.body.destination,req.body.date,req.body.classs];
    datai[0] = req.body.source.toUpperCase();
    datai[1] = req.body.destination.toUpperCase();
    console.log(datai)
    await connect()
    const rows = await checktable(datai)
    console.log(rows)
    res.setHeader("content-type","application/json")
    res.send(JSON.stringify(rows))
}

async function connect(){
    try{
        await client.connect()
        console.log("Connected successfully")
    }
    catch(e){
        console.log(`Error detected ${e}`)
    }
}
async function checktable(datai){
    try{
        const r = await client.query('select * from trainn where src=$1 AND dest=$2',[datai[0],datai[1]])

        return r.rows;
    }
    catch(e){
        console.log(`error ${e}`)
    }
}