import express from "express"

const app=express()

app.get("/",(req,res)=>{
res.send("server is runnig now")

})

app.listen(5000,(req,res)=>{
    console.log("hhtp server is at port 5000")
})