const express = require('express')
const route = express.Router()
const { handleAttReg } = require('../../model/attendance/attendance.Model')


route.get('/:year/:sem/:userId', async (req, res) => {

    const { year, sem, userId } = req.params;

    console.log(year, sem, userId)


    const response =  await handleAttReg(year, sem, userId);
    console.log(response)
    res.send(response)
})


module.exports = route