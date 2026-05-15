import { prisma } from "../lib/prisma";
import express,{json} from "express"

const app = express()
app.use(json())

app.post("/submit",async(req,res)=>{
  const {quote,name} = req.body;
  console.log(quote,name)
  await prisma.quote.create({
    data:{
      quote,
      name
    }
  })
  res.json({
    message:"your data",
    data:res
  })
})
app.listen(3000,()=>console.log("port running on 5000"))