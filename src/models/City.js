const mongoose=require('mongoose')

const CitySchema=new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true
    }
},{
    timestamps:true
})

const CityModel=mongoose.model('CityModel',CitySchema)

module.exports=CityModel