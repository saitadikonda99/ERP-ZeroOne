const express = require('express')
const router = express.Router()
const { handleEventRegister } = require('../model/eventRegModel')

router.post('/:userId/:eventId', async (req, res) => {
    const userId = req.params.userId
    const eventId = req.params.eventId;
   
    const response = await handleEventRegister(userId, eventId )
    res.send(response)
})

module.exports = router