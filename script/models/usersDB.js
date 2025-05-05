const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: 3306,
});

const findUserByEmail = async (email) => {
    const query = 'SELECT * FROM users WHERE email = ?';
    const [rows] = await pool.execute(query, [email]);
    return rows[0];
};

const createUser = async (email, password, firstname, lastname) => {
    try {
        const query = 'INSERT INTO users (email, password, firstname, lastname) VALUES (?, ?, ?, ?)';
        const [result] = await pool.execute(query, [email, password, firstname, lastname]);
        
        return {
            id: result.insertId,
            email,
            password,
            firstname,
            lastname
        };
    } catch (error) {
        console.error('MySQL createUser error:', error);
        throw error;
    }
};


module.exports = {
    findUserByEmail,
    createUser
};
