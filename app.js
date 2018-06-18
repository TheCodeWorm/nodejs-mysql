const express = require('express');
const mysql = require('mysql');

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'nodemysql'
});

// Connect
db.connect((err) => {
  if (err) {
  	throw err;
  }
  console.log("MySql Connected...");
});

const app = express();

/*
// Create DB
app.get('/createdb', (req, res) => {
  let sql = 'CREATE DATABASE nodemysql';
  db.query(sql, (err, result) => {
  	if (err) 
  		throw err;
  	console.log(result);
  	res.send("database created...");
  });
});
*/

/*
// Create table
app.get('/createpoststable', () => {
  let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id))';
  db.query(sql, (err, result) => {
  	if (err)
  		throw err;
  	console.log(result);
  	res.send("Posts table created...");
  })
});
*/

app.get('/addpost1', (req, res) => {
  let post = {title:'Post One', body:'This is post number one'};
  let sql = 'INSERT INTO POSTS SET ?';
  let query = db.query(sql, post, (err, result) => {
    if (err)
  		throw err;
  	console.log(result);
  	res.send("Post 1 added...");
  });
});

app.listen('3000', () => {
	console.log("Server started on port 3000");
});