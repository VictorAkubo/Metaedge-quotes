import express from "express"
//import prisma from "./lib/prisma.js"
import {PrismaClient} from "./generated/prisma/client"
const app = express()
app.use(express.json())

const prisma = new PrismaClient()
app.post("/",async(req,res)=>{
  
  const {quote,name} = req;
  const response = await prisma.post.create({
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
app.listen(3000)