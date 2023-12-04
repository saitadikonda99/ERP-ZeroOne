const { pool } = require('../config/db');

const handleProfile = async (userId) => {
    try {
        const [userData, fields] = await pool.query(
            `SELECT * 
             FROM user_academic_details 
             WHERE user_id = ?`,
             [userId]
            )
        return userData.length > 0 ? userData[0] : {error: "no data found"};
    } catch (error) {
        return error;
    }
}

module.exports = {
    handleProfile
}
