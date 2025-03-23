const { StatusCodes } = require("http-status-codes");
const { AppError } = require("../utils");
const { ErrorResponse } = require("../utils/common");
function validatecreateairplane(req, res, next) {
  const { modelNumber } = req.body;
  if (!modelNumber) {
    ErrorResponse.message = "Something went wrong while creating the airplane;";
    ErrorResponse.error = new AppError(
      ["model Number is not found kindly provide it"],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

module.exports = { validatecreateairplane };
