const { StatusCodes } = require("http-status-codes");
const { CommonError } = require("../utils");

function CityMiddleware(req, res, next) {
  if (!req.body.name) {
    CommonError.ErrorResponse.error = { msg: "name of the city is required" };
    return res.status(StatusCodes.NOT_FOUND).json(CommonError.ErrorResponse);
  }
  next();
}

module.exports = CityMiddleware;
