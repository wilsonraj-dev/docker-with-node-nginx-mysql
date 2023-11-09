const mysql = require('mysql');
const config = require('./config');

async function selectPeoples() {
    const connection = mysql.createConnection({
        host: config.DATABASE.HOST,
        port: config.DATABASE.PORT,
        user: config.DATABASE.USER,
        password: config.DATABASE.PASSWORD,
        database: config.DATABASE.DATABASE,
    });

    const queryAsync = () => new Promise((resolve, reject) => {
        connection.connect();

        connection.query('SELECT * FROM people', (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });

    try {
        const result = await queryAsync();
        return result;
    } catch (error) {
        throw error;
    } finally {
        connection.end();
    }
}

module.exports = selectPeoples;
