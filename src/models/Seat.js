const mongoose = require("mongoose");
const { SeatEnum } = require("../utils/common");
const { BUSINESS, ECONOMY, PREMINUM_ECONOMY, FIRST_CLASS } = SeatEnum.SEAT_TYPE;

const SeatSchema = new mongoose.Schema(
  {
    airplaneId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "AirplaneModel",
    },
    row: Number,
    col: String,
    type: {
      type: String,
      enum: [BUSINESS, ECONOMY, PREMINUM_ECONOMY, FIRST_CLASS],
      default: ECONOMY,
    },
  },
  {
    timestamps: true,
  }
);

const SeatModel = mongoose.model("SeatModel", SeatSchema);

module.exports = SeatModel;
