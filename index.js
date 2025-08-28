const express= require('express')
const app= express()
const mongoose= require('mongoose')
const{router}=require('./Routes/routes.js')
app.use(express.json())
require('dotenv').config()
async function connecting(){
try{
    await mongoose.connect(process.env.MONGO_URL)
    console.log("db connected")
}catch(err){
    console.log(err)
}
}
connecting()

app.use('/todos',router)

app.listen(8000,(req,res)=>{
    console.log("server started")
})