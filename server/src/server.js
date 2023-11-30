const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express()
const PORT = 3001

// imports start here
const Login = require('./routes/loginRoute')
const Refresh = require('./routes/refreshRoute')
const Logout = require('./routes/logoutRoute')
const verifyJWT = require('./middleware/verifyJWT')
const verifyRoles = require('./middleware/verifyRoles')
const credentials = require('./middleware/credentials')
const corsOptions = require('./config/corsOptions')


// cors 
app.use(cors(corsOptions))
app.use(credentials)

// cookie 
app.use(cookieParser());

// Parse JSON bodies (as sent by API clients)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/profile', verifyJWT, verifyRoles('student', 'Admin'), (req, res) => {
    res.json({ message: 'This is a protected route' })
})

// routes start here
app.use('/login', Login)
app.use('/refresh', Refresh)
app.use('/logout', Logout)


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})