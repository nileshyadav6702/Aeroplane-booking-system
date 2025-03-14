const mongoose=require('mongoose')

const flightSchema = new mongoose.Schema({
    flightNumber: String,
    airplaneId: { type: mongoose.Schema.Types.ObjectId, ref: "AirplaneModel", required: true},
    departureAirportId: { type: mongoose.Schema.Types.ObjectId, ref: "AirportModel", required: true },
    arrivalAirportId: { type: mongoose.Schema.Types.ObjectId, ref: "AirportModel", required: true },
    arrivalTime: { type: Date, required: true },
    departureTime: { type: Date, required: true },
    price: { type: Number, required: true },
    boardingGate: { type: String },
    totalSeats: { type: Number, required: true }
},{
    timestamps: true
})

const FlightModel = mongoose.model("FlightModel", flightSchema)

module.exports = FlightModel