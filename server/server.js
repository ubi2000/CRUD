const express = require("express")

const app =express()

app.get("/",(req,res)=>{
 res.json({hello : "World"})
 console.log("Server is  running")
})

app.listen (3000)