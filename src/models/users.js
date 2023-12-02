const dbPool = require('../config/database')

const getAllUsers = () => {
    const SQLquery = 'SELECT * FROM users'
    return new Promise((resolve, reject) => {
        dbPool.query(SQLquery, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

const createNewUser = (body) => {
    const SQLquery = `INSERT INTO users (name,email,pass) VALUES ('${body.name}','${body.email}','${body.password}')`
    return new Promise((resolve, reject) => {
        dbPool.query(SQLquery, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

const updateUser = (idUser, body) => {
    const SQLquery = `UPDATE users SET name='${body.name}', email='${body.email}', pass='${body.password}' WHERE id='${idUser}'`
    return new Promise((resolve, reject) => {
        dbPool.query(SQLquery, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

const deleteUser = (idUser) => {
    const SQLquery = `DELETE FROM users WHERE id='${idUser}'`
    return new Promise((resolve, reject) => {
        dbPool.query(SQLquery, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

module.exports = {
    getAllUsers,
    createNewUser,
    createNewUser,
    updateUser,
    deleteUser
}