const mysql = require("mysql");

exports.db = mysql.createPool({
    host: "remotemysql.com",
    user: "zignKx7qAi",
    password: "gZU9NU0Tza",
    database: "zignKx7qAi",
});