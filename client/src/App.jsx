import { Routes, Route } from 'react-router-dom'


// imports start here 
import Home from './pages/home/Home'
import Login from './pages/Auth/Login'
import Layout from './components/authentication/Layout'
import RequireAuth from './components/authentication/RequireAuth'
import PersistLogin from './components/authentication/PersistLogin'
import Profile from './pages/profile/Profile'
import Events from './pages/events/Events'
import Registration from './pages/Registrations/Registration'
import EventDes from './pages/events/EventDes'
import Forgot from './pages/Auth/Forgot'
import Reset from './pages/Auth/Reset'


function App() {
  return (
     <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>

          {/* require admin authentication */}
          <Route element={<PersistLogin/>}>
            <Route element={<RequireAuth allowedRoles={['Admin']}/>}>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/events" element={<Events />} />
              <Route path="/Registration" element={<Registration />} />
              <Route path="/EventDes/:id" element={<EventDes />} />
            </Route>
          </Route>

          {/* public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/reset/:id" element={<Reset />} />

        </Route>
      </Routes>
     </div>
  )
}

export default App
