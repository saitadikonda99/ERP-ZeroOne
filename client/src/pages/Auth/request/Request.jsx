import React from 'react'
import CryptoJS from 'crypto-js';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Request.css'

function Request() {

    const { encryptedEmail } = useParams();
    const bytes  = CryptoJS.AES.decrypt(encryptedEmail, 'sai');
    const email = bytes.toString(CryptoJS.enc.Utf8);


    const handlePassword = async () => {

        try {
            console.log(email)
            const response = await axios.post('http://localhost:3001/forgot',
                JSON.stringify(email),
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                }
            );

            console.log(response)
           
           if(response.status === 201) {
              alert('Email sent')
           }

        } catch (error) {
            console.log(error)
            alert('Use a valid email address')
        }
    }



  return (
        <div className="RequestComponent">
            <div className="RequestComponent-in">
                <div className="Request-one"></div>
                <div className="Request-two">
                    <h1>Check your Email</h1>
                </div>
                <div className="Request-three">
                    <p>We have sent a password reset link to your email address <span>{email}.</span> Click the link in the email to reset your password.</p>
                </div>
                <div className="Request-four">
                    <button onClick={handlePassword}>Resend Email</button>
                </div>
                <div className="Request-five">
                    <Link to='/login'>Back to Login</Link>
                </div>
            </div>
        </div>
  )
}

export default Request