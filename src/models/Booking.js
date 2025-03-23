const mongoose = require("mongoose");
const { Enum } = require("../utils/common");
const { BOOKED, CANCELLED, INITIATED, PENDING } = Enum.BOOKING_STATUS;

const BookingSchema = new mongoose.Schema(
  {
    flightId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "FlightModel",
    },
    UserId: { type: mongoose.Types.ObjectId, required: true, ref: "UserId" },
    status: {
      type: String,
      enum: [BOOKED, CANCELLED, INITIATED, PENDING],
      default: INITIATED,
      require: true,
    },
    totalCost: { type: Number, require: true },
    noOfSeats: { type: Number, require: true ,default: 1},
  },
  {
    timestamps: true,
  }
);
const BookingModel = mongoose.model("BookingModel", BookingSchema);

module.exports = BookingModel;
