const mongoose=require('mongoose')

const AirportSchema=new mongoose.Schema({
    name: {
        type:String,
        required:true,
        unique:true
    },
    address: {
        type:String,
        required:true,
        unique:true
    },
    cityId: {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'CityModel'
    },
    code: {
        type: String,
        required: true,
        unique: true
    }
},{
    timestamps:true
})


const AirportModel=mongoose.model('AirportModel',AirportSchema)

module.exports=AirportModel