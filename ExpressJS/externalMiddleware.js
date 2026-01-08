import express from 'express';
import morgan from 'morgan';
import absPath from './absPath.js';
const app = express();

app.use(morgan('dev'));
app.get('/',(req,res)=>{
    
    res.sendFile(absPath+'/home.html');
})

app.get('/login',(req,res)=>{
    res.sendFile(absPath+"/login.html");
})

app.post('/submit',(req,res)=>{
    
    res.sendFile(absPath+"/submit.html");
})

app.get('/await',(req,res)=>{
    setTimeout(()=>{
        res.send("Response send after 1 second")
    },1000)
})

app.listen(3200);