import express from 'express'
import { MongoClient } from 'mongodb'
import { log } from 'node:console'

const dbName="sanchezdb"
const url="mongodb://127.0.0.1:27017"
const client= new MongoClient(url)

async function dbconnection(){
    await client.connect();
    const name = client.db(dbName)
    const collection = name.collection('department')

    const result = await collection.find().toArray();

    console.log(result);
    
}

dbconnection();
const app = express()
app.listen(3200);
