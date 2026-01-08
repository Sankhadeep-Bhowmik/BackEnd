import express from 'express';
import absPath from './absPath.js';
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.static('css'));
app.get('/',(req,res)=>{
    
    res.sendFile(absPath+'/home.html');
})

app.get('/login',(req,res)=>{
    res.sendFile(absPath+"/login.html");
})

app.post('/submit',(req,res)=>{
    console.log('Name is and password is: ',req.body);
    
    res.sendFile(absPath+"/submit.html");
})

app.listen(3200);