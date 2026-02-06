import express from 'express'
import { MongoClient } from 'mongodb'
const app= express()
const dbName = "sanchezdb"
const url="mongodb://127.0.0.1:27017"
const client = new MongoClient(url)

app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.json())

client.connect().then((connection)=>{
    const name= connection.db(dbName)
    app.get('/',(req,res)=>{
        res.render('addStudents')
    })
    app.post('/addStudent',async (req,res)=>{
        const collection=name.collection("department")
        const data = await collection.insertOne(req.body)
        const result = await collection.find().toArray();
        res.send(result)
    })

    app.post('/addStudentsApi',async (req,res)=>{
        console.log(req.body);
        
        const collection=name.collection("department")
        const {name,course,age}=req.body;
        if(!name || !course || !age){
            res.send({"Operation":"Failed"})
        }
        const data = await collection.insertOne(req.body)
        res.send({"Operation":"Succeed"})
    })
})
app.listen(3200)

