const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express()
const PORT = 3001

// imports start here

// middleware
const verifyJWT = require('./middleware/verifyJWT')
const verifyRoles = require('./middleware/verifyRoles')
const credentials = require('./middleware/credentials')
const corsOptions = require('./config/corsOptions')

// auth routes
const Login = require('./routes/auth/login.Route')
const Refresh = require('./routes/auth/refresh.Route')
const Logout = require('./routes/auth/logout.Route')
const Forgot = require('./routes/auth/forgot.Route')
const Reset = require('./routes/auth/reset.Route')

// event routes

const Events = require('./routes/events/event.Route')
const EventRegister = require('./routes/events/eventReg.Route')
const UnRegister = require('./routes/events/eventUnreg.Route')
const UserReg = require('./routes/events/userReg.Route')

// profile routes
const Profile = require('./routes/profile/profile.Route')

// attendance routes
const getAttendace = require('./routes/attendance/attendance.Route')

// projects routes
const getProjects = require('./routes/projects/project.Route')
const Projects = require('./routes/projects/userPro.Route')




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
app.use('/forgot', Forgot)
app.use('/reset', Reset)

// auth routes
app.use('/profile', verifyJWT, Profile)
app.use('/events', verifyJWT ,Events)
app.use('/eventRegister', verifyJWT, EventRegister)
app.use('/unRegister', verifyJWT, UnRegister)
app.use('/UserReg', verifyJWT, UserReg)
app.use('/getAttendance', verifyJWT, getAttendace)
app.use('/getProjects', verifyJWT, getProjects)
app.use('/Projects', verifyJWT, Projects)


app.get('/', (req, res) => {
    res.send(`<h1 style="text-align:center">Server running</h1>`);
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})