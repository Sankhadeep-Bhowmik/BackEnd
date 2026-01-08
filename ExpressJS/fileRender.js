import express from 'express';
import absPath from './absPath.js';
import path from 'path';
const app= express();
const stylePath= path.resolve('css');
console.log(stylePath);

app.use(express.static(stylePath));

app.get('/',(req,res)=>{
    
    res.sendFile(absPath+'/home.html');
})

app.get('/login',(req,res)=>{
    
    res.sendFile(absPath+"/login.html");
})

app.post('/submit',(req,res)=>{
    
    res.sendFile(absPath+"/submit.html");
})

//for 404
app.use((req,res)=>{
    res.status(404).sendFile(absPath+'/404.html')
})
app.listen(3004);