
import { pool } from '../db.js'

export const getUsers = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM employee');
        res.status(200).json({
            employees: response
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};

export const findUser = async(req, res) => {
    try{
        const {id} = req.params;
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id]);
        res.status(200).json(rows[0])
    } catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}

export const createUser = async(req, res) => {
    try{
        const { name, salary } = req.body;
        const [rows] = await pool.query('INSERT INTO employee(name, salary) VALUES(?,?)', [name, salary]);
        res.status(200).json({
            id: rows.insertId,
            name,
            salary
        });
    } catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}

export const updateUser = async (req, res) => {
    try {
        res.status(200).json({
            message: "Actualizando usuario"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const deleteUser = async(req, res) => {
    try{
        res.status(200).json({
            message: "Eliminando usuario"
        })
    } catch( error) {
        res.status(500).json({
            messagen: error.message
        })
    }
}