const express = require('express')
const app = express()
const PORT = 3001

app.get('/', (req, res) => {
    res.send(`<h1>Tadikonda Sai Manikanta</h1>`)
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})