const express = require('express')
const bodyParser=require('body-parser')

const app=express();

const port=3000;
app.use(bodyParser.json())
app.get('/',(req,res)=>{
    console.log(req.body,"hello")
res.send("hello")
})
app.post('/conversations',(req,res)=>{
    console.log(req.body,"hello")
    console.log(req.headers["authorization"],"hello")
res.send({
    msg:'2+2 = 4'
})
})

app.listen(port)