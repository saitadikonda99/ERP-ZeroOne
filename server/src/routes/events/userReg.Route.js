const express = require('express')
const router = express.Router()
const { handleEveReg } = require('../../model/events/userReg.Model')

router.get('/:userId', async (req, res) => {
    const userId = req.params.userId
    const response = await handleEveReg(userId)
    res.send(response)
})

module.exports = router
