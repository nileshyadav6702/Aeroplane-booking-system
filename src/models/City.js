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

CitySchema.pre('findOneAndDelete', async function(next){
    const cityId = this.getQuery()._id;
    await require('./Airport').deleteMany({ cityId })
    next();
})

const CityModel=mongoose.model('CityModel',CitySchema)

module.exports=CityModel