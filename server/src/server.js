const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express()
const PORT = 3001

// imports start here
const Login = require('./routes/auth/loginRoute')
const Refresh = require('./routes/auth/refreshRoute')
const Logout = require('./routes/auth/logoutRoute')
const verifyJWT = require('./middleware/verifyJWT')
const verifyRoles = require('./middleware/verifyRoles')
const credentials = require('./middleware/credentials')
const corsOptions = require('./config/corsOptions')
const Profile = require('./routes/profileRoute')
const Events = require('./routes/eventRoute')
const EventRegister = require('./routes/eventRegister')
const UserReg = require('./routes/UserReg')
 


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
app.use('/profile', verifyJWT, Profile)
app.use('/events', verifyJWT ,Events)
app.use('/eventRegister', verifyJWT, EventRegister)
app.use('/UserReg', UserReg)


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})