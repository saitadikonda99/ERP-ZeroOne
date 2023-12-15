const express = require('express')
const route = express.Router()

const { handleProModel } = require('../../model/projects/userPro.Model')

route.get('/:userId', async (req, res) => {
    
    const { userId } = req.params;
    const response = await handleProModel(userId);
    res.send(response)
})


module.exports = route;
