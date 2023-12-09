const express = require('express');
const router = express.Router();
const { handleunRegister } = require('../model/unRegisterModel');   


router.delete('/:eventId/:userId', async (req, res) => {
    const { eventId } = req.params;
    const { userId } = req.params;
    const response = await handleunRegister(eventId, userId);
    res.json(response);
});

module.exports = router;