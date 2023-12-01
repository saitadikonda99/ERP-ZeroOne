const express = require('express')
const router = express.Router()
const { handleRefreshToken } = require('../../controller/auth/refreshController')

router.get('/', (req, res) => {
    handleRefreshToken(req, res)
})

module.exports = router