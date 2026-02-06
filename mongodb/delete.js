import express from 'express'
import { MongoClient, ObjectId } from 'mongodb'

const app= express()

app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))

const dbName="sanchezdb"
const url="mongodb://127.0.0.1:27017"
const client= new MongoClient(url)

client.connect().then((connection)=>{
    const database= connection.db(dbName)
    app.get('/',async (req,res)=>{
        const collection= database.collection("department")
        const data= await collection.find().toArray()
        res.render('students',{data})
    })
    app.delete('/delete/:id',(req,res)=>{
        console.log(req.params.id);
        const collection= database.collection("department")
        const result= collection.deleteOne({_id:new ObjectId(req.params.id)})
        if(result){
            res.send("Data deleted")
        }
        else{
            res.send("Try again")
        }
    })
    app.listen(3200)
})