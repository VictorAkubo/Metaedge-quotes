import { prisma } from "./lib/prisma";
import cors from "cors"
import express from "express"

const app = express()
app.use(express.json())
app.use(cors())

app.get("/",async(req,res)=>{

  try{
   const response = await prisma.quote.findMany()
   res.json(response)
  }catch(error){
    res.status(500).json(error)
  }
})
app.post("/submit",async(req,res)=>{ 
  const {quote,name} = req.body;
  try{
  const response = await prisma.quote.create({
    data:{
      quote,
      name
    }
  })
  res.json({
    message:"your data",
    data:response
  })
  }catch(error){
    res.status(500).json({
      error
    })
  }
})
app.listen(5000,()=>console.log("port running on 5000"))