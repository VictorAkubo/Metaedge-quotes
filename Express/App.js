import express from "express"
import prisma from "./prisma"
const app = express()
app.use(express.json())

app.get("/",(req,res)=>{
  const {quote,name} = req;
  await prisma
  res.json({
    message:"your data",
    data:[1,2,3,4,5,6]
  })
})
app.listen(3009)