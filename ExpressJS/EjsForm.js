import express from 'express'
const app= express();

app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));

app.get('/addUser',(req,res)=>{
    res.render('addUser');
})

app.post('/submituser',(req,res)=>{
    console.log(req.body);
    res.render('submitUser',req.body);
    
})

//sending data for conditions in ejs
app.get('/users',(req,res)=>{
    const users=['A','B','C','D','E','O'];
    const val= 2;
    res.render('users',{users:users,value:val});
})
app.listen(3200);