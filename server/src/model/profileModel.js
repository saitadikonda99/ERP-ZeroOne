const { pool } = require('../config/db');

const handleProfile = async (userId) => {
    const [userData, fields] = await pool.query(
        `SELECT * 
         FROM user_academic_details 
         WHERE user_id = ?`,
         [userId]
        )
    return userData[0];
}

module.exports = {
    handleProfile
}