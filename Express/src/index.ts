import { prisma } from "../lib/prisma";
import cors from "cors"
import express,{json} from "express"

const app = express()
app.use(json())
app.use(cors())

app.get("/",async(req,res)=>{
  const fetched = []
  try{
   const response = await prisma.quote.findMany()
   
  const randomIndex = Math.floor(Math.random() * response.length);
   res.json(response[randomIndex])
  }catch(error){
    res.status(500).json(error)
  }
})
app.post("/submit",async(req,res)=>{
  const {quote,name} = req.body;
  try{
  console.log(quote,name)
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