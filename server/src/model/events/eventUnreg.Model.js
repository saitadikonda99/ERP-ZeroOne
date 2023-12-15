const { pool } = require('../../config/db')

const handleunRegister = async (eventId, userId) =>  {
    try {

        const response = await pool.query(
            `DELETE FROM registrations 
             WHERE event_id = ? AND user_id = ?`,
             [eventId, userId]
        )
        
        return response[0].affectedRows > 0 ? { message: "Successfully unRegistered 😊" } : { message: "Failed to unRegister" };
        
    } catch (error) {
        return error;
    }
}

module.exports = {
    handleunRegister
}