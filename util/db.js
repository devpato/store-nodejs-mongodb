const mysql = require('mysql2');
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'node-store',
  password: 'Policia9@'
});

module.exports = pool.promise();
