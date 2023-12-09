const { pool } = require('../../config/db')
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');


const handleForgot = async (req, res) => {
    const { email } = req.body;

    // check email exists in the database 
    try {
        const response = await pool.query(
            `SELECT username
             FROM users 
             WHERE email = ?`,
             [email]
        ) 


        if (response[0].length === 0) {
            return res.status(404).json({ error: 'User not found' });
        } 

        // create a jwt token that is valid for 10 minutes
        const forgotToken = jwt.sign(
            { username: response[0][0].username },
            process.env.FORGOT_TOKEN_SECRET,
            { expiresIn: '10m', algorithm: 'HS256' }
        )

        // send email to user with the forgot token
        const transporter = nodemailer.createTransport({
            service: 'outlook',
            auth: {
                user: process.env.EMAIL_ADDRESS,
                pass: process.env.EMAIL_PASSWORD
            }
        })

        const mailOptions = {
            from: process.env.EMAIL_ADDRESS,
            to: email,
            subject: 'Password Reset',
            text: `Please click the link to reset your password: ${process.env.CLIENT_URL}/reset/${forgotToken}`
        }

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error)
            }  
        })

        res.status(201).send({
            Email_status: 'Email sent'
        })

    } catch (error) {
        res.status(400).send({
            Email_status: 'Email does not exist'
        })
    }
}

module.exports = {
    handleForgot
}