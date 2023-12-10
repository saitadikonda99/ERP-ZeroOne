const { pool } = require('../config/db')



const handleAttReg = async ( year, sem , userId ) => {

        try {
            const response = await pool.query(
                `SELECT events.event_name, 
                        event_date, 
                        attendance.user_id,
                        attendance.status
                From attendance 
                JOIN events ON attendance.user_id = events.user_id
                WHERE attendance.user_id = ? 
                AND academic_year_name = ?
                AND academic_sem = ?`,
                [userId, year, sem]
            )
        
            console.log(response)
        return response[0].length > 0 ? response : { message: "Not data found!"}

        } catch (error) {
            return error
        }

}


module.exports = {
    handleAttReg
}

