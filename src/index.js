const {ServerConfig,Logger}=require('./config')
const express=require('express')
const router = require('./routes')

const app=express()

app.use('/api',router)

//running the server on the port
app.listen(ServerConfig.PORT,()=>{
    console.log(`server started on port ${ServerConfig.PORT}`)
    // Logger.info('successfully started the server','root',{})
})