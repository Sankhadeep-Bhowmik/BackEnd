//const express = require('express')(); //or

import express from 'express';
import homePage from './pages/home.js';
import about from './pages/about.js';
import contact from './pages/contact.js';
const app = express();

app.get('',(req,res)=>{
    res.send(homePage())
})

app.get('/about',(req,res)=>{
    //const url= req.url.slice(1).toUpperCase();
    res.send(about());
})

app.get('/contact',(req,res)=>{
    //const url= req.url.slice(1).toUpperCase();
    res.send(contact());
})
app.listen(3005);