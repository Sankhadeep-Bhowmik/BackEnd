import express from 'express'
import userData from './users.json' with {type:'json'}
const app = express();

app.get('/',(req,res)=>{
    res.send(userData)
})

app.get('/user/:id',(req,res)=>{
    const id=req.params.id;
    let filterData = userData.filter((user)=>user.id==id)
    res.send(filterData);
})

app.get('/username/:name',(req,res)=>{
    const name=req.params.name;
    console.log(name);
    
    let filterData = userData.filter((user)=>user.name.toLowerCase()==name.toLowerCase())
    res.send(filterData);
})
app.listen(3200)