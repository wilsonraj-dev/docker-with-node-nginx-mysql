const faker = require('faker');
const mysql = require('mysql');
const config = require('./config');

async function insertPeople() {
    const connection = mysql.createConnection({
        host: config.DATABASE.HOST,
        port: config.DATABASE.PORT,
        user: config.DATABASE.USER,
        password: config.DATABASE.PASSWORD,
        database: config.DATABASE.DATABASE,
    });

    const queryAsync = () => new Promise((resolve, reject) => {
        connection.query(`INSERT INTO people(name) values('${faker.internet.userName()}')`, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
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

module.exports = insertPeople;
