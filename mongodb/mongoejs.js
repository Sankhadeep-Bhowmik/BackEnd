import express from 'express'
import { MongoClient } from 'mongodb'

const app = express()
app.set('view engine','ejs')

const dbName= "sanchezdb"
const url="mongodb://127.0.0.1:27017"
const client = new MongoClient(url);

app.get('/',async (req,res)=>{
    await client.connect()
    const name= client.db(dbName)
    const collection= name.collection("department")
    const data= await collection.find().toArray();
    console.log(data)
    
    res.render('students',{data});
})

app.listen(3200)