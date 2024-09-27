const express = require('express');
const router = express.Router()
const fbApi = require('../controllers/fbApiController')

router.get('/fbapi', fbApi.verifyConnection)

module.exports = router