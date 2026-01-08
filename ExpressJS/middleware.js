import express from 'express';
const app = express();


//age check middleware
// function ageCheck(req,res,next){
//     if(!req.query.age || req.query.age<18){
//         res.send("Not an adult");
//     }
//     else{
//        next();
//     }
// }

//ip blocker
function ipCheck(req,res,next){
    const ip = req.socket.remoteAddress;
    if(!ip.includes("192.168.0.102")){
        res.send("Can't access");
    }
    else{
       next();
    }
}
app.use(ipCheck)
app.get('/',(req,res)=>{
    res.send('Home Page');
})

app.get('/login',(req,res)=>{
    res.send('Login Page');
})

app.get('/admin',(req,res)=>{
    res.send('Admin Page');
})

app.listen(3200);