import express from 'express'
import { MongoClient } from 'mongodb'
const app=express()
app.set('view engine','ejs')
const dbname= "sanchezdb"
const url="mongodb://127.0.0.1:27017"
const client= new MongoClient(url)

client.connect().then((connection)=>{
    const db=client.db(dbname);
    app.get('/api',async(req,res)=>{
        const collection= db.collection("department")
        const data= await collection.find().toArray()
        console.log(data);
        res.send(data);
    })
    app.get('/',async(req,res)=>{
        const collection= db.collection("department")
        const data= await collection.find().toArray()
        res.render('students',{data});
    })

})

app.listen(3200)