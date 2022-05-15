const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'company'
});

db.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("Up and running!")
  }
});

module.exports = db;