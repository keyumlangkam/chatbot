const User = require('../models/user')

exports.getDiscountAmount = async(req,res,next) =>{
  const pageId = req.get('Authorization')
  const discount = await User.findOne({pageId:pageId})
  console.log(discount)
  res.json(discount.discount)
}