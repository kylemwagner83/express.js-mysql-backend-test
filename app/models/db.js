const mysql = require('mysql');
const dbConfig = require('../config/db.config.js');

// Create database connection
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});


// Open connection
connection.connect(error => {
    if (error) throw error;
    console.log('Succcessfully connected to the database.')
});

module.exports = connection;