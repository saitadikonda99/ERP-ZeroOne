const express = require('express')
const router = express.Router()
const { handleProfile } = require('../model/profileModel')

router.get('/:userId', async (req, res) => {
    const userId = req.params.userId
    const response = await handleProfile(userId, res)
    res.send(response)
})

module.exports = router