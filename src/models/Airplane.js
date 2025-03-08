const mongoose=require('mongoose')

const AirplaneSchema = new mongoose.Schema({
  modelNumber: String,
  Capacity: {
    type:Number,
    default:0,
    max:1000
  },
},{
    timestamps:true
});

const AirplaneModel=mongoose.model('AirplaneModel',AirplaneSchema)

module.exports=AirplaneModel
