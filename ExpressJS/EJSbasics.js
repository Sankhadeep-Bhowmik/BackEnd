import { name } from 'ejs';
import express from 'express';
const app= express();

app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render("home",{name:'Sankhadeep',age:21});
})

app.listen(3200);