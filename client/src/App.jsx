import { Routes, Route } from 'react-router-dom'
import useAuth from './hooks/UseAuth'


// imports start here 
import Home from './pages/home/Home'
import Login from './pages/Auth/Login/Login'
import Layout from './components/authentication/Layout'
import RequireAuth from './components/authentication/RequireAuth'
import PersistLogin from './components/authentication/PersistLogin'
import Profile from './pages/profile/Profile'
import Events from './pages/events/Events'
import Registration from './pages/Registrations/Registration'
import EventDes from './pages/events/EventDes'
import Forgot from './pages/Auth/forgot/Forgot'
import Reset from './pages/Auth/reset/Reset'
import Request from './pages/Auth/request/Request'


// admin imports


function App() {

  const { auth } = useAuth();

  return (
     <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>

          {/* require Student authentication */}
          <Route element={<PersistLogin/>}>

            <Route element={<RequireAuth allowedRoles={['Student', 'Admin']}/>}>
           
                <Route path="/" element={<Home />} /> 
               
            </Route>
            
              <Route element={<RequireAuth allowedRoles={['Student']}/>}>
                <Route path="/profile" element={<Profile />} />
                <Route path="/events" element={<Events />} />
                <Route path="/Registration" element={<Registration />} />
                <Route path="/EventDes/:id" element={<EventDes />} />
                <Route path='/attendance' element={<Attendance/>}/>
              </Route>
          
          {/* require Admin authentication */}
            <Route element={<RequireAuth allowedRoles={['Admin']}/>}>

            </Route>

              {/* require no authentication */}
              <Route path="/auth/login" element={<Login />} />
              <Route path="/auth/forgot" element={<Forgot />} />
              <Route path="/auth/reset/:id" element={<Reset />} />
              <Route path="/auth/request/resend/:encryptedEmail" element={<Request />} />
              <Route path="/unAuth" element={<UnAuth />} />

          </Route>
        </Route>
      </Routes>
     </div>
  )
}

export default App