const { pool } = require('../config/db')

const handleEveReg = async (userId) => {
    try {
        const response = await pool.query(
            `SELECT events.event_id, events.event_name, events.event_date, events.academic_year_name, events.academic_sem,
                events.event_time, events.event_venue, events.event_description, events.event_org,
                registrations.registration_id, registrations.user_id, registrations.created_at AS registration_data
                FROM events
                JOIN registrations ON events.event_id = registrations.event_id
                WHERE registrations.user_id = ?`,
             [userId]
            )
        return response.length > 0 ? response[0] : {error: "no data found"};
    } catch (error) {
        return error;
    }
}

module.exports = {
    handleEveReg
}
