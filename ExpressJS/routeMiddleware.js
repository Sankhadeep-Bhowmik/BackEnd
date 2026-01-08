import express from 'express'
const app = express();

function UrlCheckMiddleWare(req,res,next){
    console.log(req.url);
    next();
}

function ageCheck(req,res,next){
    if(!req.query.age || req.query.age<18){
        res.send("Not an adult");
    }
    else{
        console.log(req.query.age);
        
       next();
    }
}

app.get('/',(req,res)=>{
    res.send('Home Page');
})

app.get('/login',ageCheck,UrlCheckMiddleWare,(req,res)=>{
    res.send('Login Page');
})

app.get('/admin',(req,res)=>{
    res.send('Admin Page');
})

app.listen(3200);