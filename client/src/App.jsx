import { Routes, Route } from 'react-router-dom'
import './App.css'

// imports start here 
import Home from './pages/Home'
import Login from './pages/Auth/Login'
import Layout from './components/authentication/Layout'
import RequireAuth from './components/authentication/RequireAuth'

function App() {
  
  return (
     <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>

          {/* require admin authentication */}
          <Route element={<RequireAuth allowedRoles={['admin']}/>}>
            <Route path="/" element={<Home />} />
          </Route>

          {/* public routes */}
          <Route path="/login" element={<Login />} />

        </Route>
      </Routes>
     </div>
  )
}

export default App
