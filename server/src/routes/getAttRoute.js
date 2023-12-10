const express = require('express')
const route = express.Router()
const { handleAttReg } = require('../model/getAttModel')


route.get('/:year/:sem/:userId', (req, res) => {

    const { year, sem, userId } = req.params;

    console.log(year, sem , userId)
   const response =  handleAttReg(year, sem, userId);
    res.send(response)
})


module.exports = route