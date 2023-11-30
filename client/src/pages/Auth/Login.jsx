import React, { useState } from 'react'

function Login() {
    const [userData, setUserData] = useState({})

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

  return (
    <div className="LoginComponent">
        <div className="LoginComponent-in">
            <form>
                <div className="LoginComponent-one">
                    <input 
                        type='text'
                        name='username'
                        placeholder='Username'
                        value={userData.username}
                        onChange={handleChange}                        
                    />
                </div>
                <div className="LoginComponent-two">
                    <input 
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={userData.password}
                        onChange={handleChange}                        
                    />
                </div>
                <div className="LoginComponent-three">
                    <button type='submit'>Login</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login