const mysql = require("mysql");

const optionsMysql = {
	user: "admin",
	password: "paste_password_here",
	database: process.env.network === "mainnet" ? "Toncells_mainnet" : "Toncells",
};

const pool = mysql.createPool(optionsMysql);

exports.pool = pool;
