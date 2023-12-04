const express = require('express')
const router = express.Router()
const { handleEveReg } = require('../model/userReg')

router.get('/:userId', async (req, res) => {
    const userId = req.params.userId
    const response = await handleEveReg(userId)
    console.log(response)
    res.send(response)
})

module.exports = router
