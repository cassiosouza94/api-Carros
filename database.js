const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    port: "3310",
    database: "center_parking"
});

connection.connect((error) => {
    if (error) throw error;
    console.log("conexão estabelecida com o banco de dados: Center Parking 🅿️ 🚘");
});

module.exports = connection;