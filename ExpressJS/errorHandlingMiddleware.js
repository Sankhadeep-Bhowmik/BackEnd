import express from 'express';
import morgan from 'morgan';
import absPath from './absPath.js';
const app = express();

//error handling middleware
app.use((err,req,res,next)=>{
    res.status(err.status || 500).send("Try Again Later");
})

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


app.listen(3200);