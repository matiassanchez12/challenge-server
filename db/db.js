const mysql = require("mysql");
console.log("first");
exports.db = mysql.createPool({
  host: "sql10.freemysqlhosting.net",
  user: "sql10490970",
  password: "Qfn7FzC24P",
  database: "sql10490970",
});
