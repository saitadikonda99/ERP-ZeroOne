const { pool } = require('../../config/db')

const handleProModel = async (userId) => {

    try {
        
        const response = await pool.query(
            `
            SELECT 
                projects.academic_year_name,
                projects.academic_sem,
                projects.project_name,
                projects.project_description,
                projects.project_link,
                projects.project_status,
                user_projects.enroll_status
            FROM
                projects
            JOIN
                user_projects ON projects.project_id = user_projects.project_id
            WHERE
                user_projects.user_id = ?
            `, [userId]
        )

        return response[0].length > 0 ? response[0] : { message: "No data found!" }

    } catch (error) {
        return error
    }
}


module.exports = {
    handleProModel
}