const {StatusCodes}=require('http-status-codes')

const getInfo = (req, res) => {
    res
    .status(StatusCodes.OK)
    .json({msg:"get the info from api version 1"});
};

module.exports = {
    getInfo
}; 