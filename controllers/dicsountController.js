const discount = require("../components/data/discount")

exports.getDiscountAmount = async(req,res,next) =>{
  const discountAmount = discount
  res.json(discountAmount)
}