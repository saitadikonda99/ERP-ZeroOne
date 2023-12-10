const { pool } = require('../config/db');

const handleEventRegister = async (user_id, event_id) => {
    try {
        const response = await pool.query(
            `INSERT INTO registrations (event_id, user_id) 
             VALUES (?, ?)`,
            [event_id, user_id]
        ) 
            
        return response[0].affectedRows > 0
        ? { message: "Successfully Registered 😊" }
        : { message: "Failed to register" };
    }
    catch (error) {
        if (error.code === "ER_DUP_ENTRY") {
            return { message: "You have already registered for this event" };
        } 
        return { message: error.message };
    }
}

module.exports = {
    handleEventRegister
}