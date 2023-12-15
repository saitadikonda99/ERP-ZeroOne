const express = require('express')
const router = express.Router()
const { handleEvent } = require('../../model/events/event.Model')

router.get('/', async (req, res) => {
    const response = await handleEvent()
    res.send(response)
})

module.exports = router