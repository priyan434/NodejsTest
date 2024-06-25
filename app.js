const express=require("express")
const cors=require("cors")
const Routers=require('./Routers/router')

const app=express()
var bodyParser = require('body-parser')
app.use(express.urlencoded())
app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
require('dotenv').config()

const PORT=3307||process.env.PORT


app.use("/api",Routers)

app.listen(PORT,()=>{
    console.log(`app is running at ${PORT}`);
})