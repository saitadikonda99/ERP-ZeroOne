const express = require('express')
const { handleForgot } = require('../../controller/auth/forgot.Controller')

const router = express.Router()

router.post('/', (req, res) => {
    handleForgot(req, res)
})

module.exports = router