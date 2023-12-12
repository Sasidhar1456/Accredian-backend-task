// src/database/db.js
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'accredian',
});

db.promise(); // Convert to promise-based

module.exports = db;
