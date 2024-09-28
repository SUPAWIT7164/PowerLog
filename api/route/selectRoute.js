const express = require('express')
const router = express.Router()
const { handleSelectLog } = require('../controller/selectController')

router.get('/selectLog', handleSelectLog)

module.exports = router
