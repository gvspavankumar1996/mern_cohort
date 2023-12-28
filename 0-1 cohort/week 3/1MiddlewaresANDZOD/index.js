const express = require("express");
const zod = require("zod");

const app = express();
const schema = zod.array(zod.string());

app.use(express.json());
app.post('/health-checkup',(req,res)=>{
  console.log(body.req.hello)
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys)

  res.json(response)
})

//global exception handler
app.use((err,req,res,next)=>{
  console.log(err,"errrr")
  res.send({msg:"internal error"})
})
app.listen(3000)
