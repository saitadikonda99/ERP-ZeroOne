const express = require('express')
const { handleForgot } = require('../../controller/auth/forgotController')

const router = express.Router()

router.post('/', (req, res) => {
    handleForgot(req, res)
})

module.exports = router