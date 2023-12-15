const express = require('express')
const router = express.Router()
const { handleProModel } = require('../../model/projects/Project.Model')



router.get('/:userId', async (req, res) => {

    const userId = req.params.userId
    const response = await handleProModel(userId)
    res.send(response)
})

module.exports = router
