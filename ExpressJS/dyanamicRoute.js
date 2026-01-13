import express from 'express'
const app= express();

app.get('/',(req,res)=>{
    const list=['anil','atul','shankar','loy'];
    let data=''
    for(let i=0;i<list.length;i++){
        let names=list[i].charAt(0).toUpperCase()+list[i].slice(1);
        data+=`<ul><li><a href='/users/${names}'>${names}</a></li></ul>`
    }
    res.send(data);
})

app.get('/users/:name',(req,res)=>{
    const name=req.params.name;
    const name1= name.charAt(0).toUpperCase()+ name.slice(1)
    res.send(`<h1>${name1}'s profile</h1>`);
})
app.listen(3200);