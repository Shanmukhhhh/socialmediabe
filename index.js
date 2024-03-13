const express = require('express')


const app=express()
const mongoose=require("mongoose")
const dotenv= require("dotenv").config()
const helmet = require('helmet')
const morgan=require('morgan')
const userRoute = require("./Routes/users")
const authRoute = require("./Routes/auth")

//db connection

mongoose.connect(process.env.MONGO_URL).then(()=>console.log("MongoDB Connected..."))
.catch((err)=> console.log(err))

//Middlewares

app.use(express.json())
app.use(helmet())
app.use(morgan('common'))


//Routes

app.use("/api/users/",userRoute)

app.use("/api/auth",authRoute)





app.listen(6789,function(){

    console.log("Server started")
})