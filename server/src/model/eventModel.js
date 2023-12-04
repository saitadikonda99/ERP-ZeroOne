const { pool } = require('../config/db');

const handleEvent = async () => {
    try {
        const [eventData, fields] = await pool.query(
            `SELECT * 
             FROM events`
        )
        return eventData.length > 0 ? eventData : {error: "no data found"};
    } catch (error) {
        console.log(error)
        return error;
    }
}

module.exports = {
    handleEvent
}
