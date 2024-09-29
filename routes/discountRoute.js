const express = require('express');
const router = express.Router()
const discountAmount = require('../controllers/dicsountController')

router.get('/discount', discountAmount.getDiscountAmount)

module.exports = router