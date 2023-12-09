import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import CryptoJS from 'react-native-crypto-js';

import './Forgot.css'

function Forgot() {
    const [formData, setFormData] = useState({ email: '' })
    const navigate = useNavigate();

    const handleChange = (e) => {
        e.preventDefault()
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handlePassword = async (e) => {

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

            console.log(response.status)
           
           if(response.status === 201) {
            const encryptedEmail = CryptoJS.AES.encrypt(formData.email, 'sai' ).toString();
             navigate(`/request/resend/${encryptedEmail}`)
           }

        } catch (error) {
            console.log(error)
            alert('Use a valid email address')
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