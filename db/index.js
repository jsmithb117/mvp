/* eslint-disable no-undef */
const mysql = require('mysql');
const password = require('./mysqlPW');

module.exports = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: password.toString(),
  database: "chickintender"
});