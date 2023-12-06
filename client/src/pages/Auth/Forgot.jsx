import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Forgot.css'

function Forgot() {
    const [formData, setFormData] = useState({ email: '' })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handlePassword = async (e) => {
        e.preventDefault();
        try {
            console.log(formData)
            const response = await axios.post('http://localhost:3001/forgot',
                JSON.stringify(formData),
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                }
            );
            toast.success(response.data.message)
        } catch (error) {
            console.log(error)
            toast.error('Password reset failed')
        }
    }

  return (
        <div className="ForgotComponent">
            <div className="ForgotComponent-in">
                <div className="Forgot-one">
                    <h2>Find your account</h2>
                    <p>Enter your email address linked to your account</p>
                </div>
                <div className="Forgot-two">
                    <input type="email" 
                        name='email'
                        placeholder='Enter your register mail'
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="Forgot-three">
                     <button onClick={handlePassword} id={formData.email? 'forgot-btn' : ''} >Next</button>
                </div>
            </div>
        </div>
  )
}

export default Forgot