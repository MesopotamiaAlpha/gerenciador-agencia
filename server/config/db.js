const mysql = require('mysql');

const db = mysql.createConnection({
host: "192.168.1.28",
user: "jose",
password: "Mesopotamia@45",
database:"cadastroPassageiros" 
})

module.exports = db;