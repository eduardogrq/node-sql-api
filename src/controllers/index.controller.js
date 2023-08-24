
import { pool } from '../db.js'

export const pong = async(req, res) => {
    try {
        const result = await pool.query('SELECT "pong" AS solution');
        res.status(200).json({
            result: result[0]
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export default pong;