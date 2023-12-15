const { pool } = require('../../config/db')



const handleAttReg = async ( year, sem , userId ) => {

        try {
            
            let query = 
                `SELECT
                events.event_name,
                events.event_date,
                attendance.user_id,
                attendance.status,
                events.academic_sem,
                events.academic_year_name AS AttData
            FROM
                events
            JOIN
                attendance ON events.event_id = attendance.event_id
            WHERE
                attendance.user_id = ?`

        const queryParams = [userId]


        if (year !== undefined) {
            query += ` AND attendance.academic_year_name = ?`
            queryParams.push(year)
        }
            
        if (sem !== undefined) {
            query += ` AND attendance.academic_sem = ?`
            queryParams.push(sem)
        }


        const response = await pool.query(query, queryParams)

        return response[0].length > 0 ? response[0] : { message: "Not data found!"}

        } catch (error) {
            return error
        }

}


module.exports = {
    handleAttReg
}