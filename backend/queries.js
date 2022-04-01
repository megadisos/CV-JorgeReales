const Pool = require('pg').Pool;
const config = require('./config');
const pool = new Pool({
    user: config.database.user,
    host: config.database.host,
    database: config.database.database,
    password: config.database.password,
    port: config.database.port,
})

const getUsers = (request, response) =>{
    const id = parseInt(request.params.id);
    pool.query(`SELECT * FROM users WHERE id = ${id}`,(error,results) =>{
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};

const getCarrerHistory = (request, response) =>{
    const id = parseInt(request.params.id);
    pool.query(`SELECT * FROM carrer_history WHERE userid = ${id}`,(error,results) =>{
        if (error){
            throw error;
        }
        response.status(200).json(results.rows);
    });
};

const getAcademicHistory = (request, response) =>{
    const id = parseInt(request.params.id);
    pool.query(`SELECT * FROM academic_history WHERE userid = ${id}`,(error,results) =>{
        if (error){
            throw error;
        }
        response.status(200).json(results.rows);
    });
};

const getSkills = (request, response) =>{
    const id = parseInt(request.params.id);
    pool.query(`SELECT * FROM skills_abilities WHERE userid = ${id}`,(error,results) =>{
        if (error){
            throw error;
        }
        response.status(200).json(results.rows);
    });
};
module.exports = {
    getUsers,
    getCarrerHistory,
    getAcademicHistory,
    getSkills,
};