import { Routes, Route } from 'react-router-dom'
import './App.css'

// imports start here 
import Home from './pages/Home'
import Login from './pages/Auth/Login'
import Layout from './components/authentication/Layout'
import RequireAuth from './components/authentication/RequireAuth'
import PersistLogin from './components/authentication/PersistLogin'

function App() {
  return (
     <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>

          {/* require admin authentication */}
          <Route element={<PersistLogin/>}>
          <Route element={<RequireAuth allowedRoles={['Admin']}/>}>
            <Route path="/" element={<Home />} />
          </Route>
          </Route>

          {/* public routes */}
          <Route path="/login" element={<Login />} />

        </Route>
      </Routes>
     </div>
  )
}

export default App
