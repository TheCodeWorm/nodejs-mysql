const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'articles'
});
connection.connect();

connection.query('select * from articles', function(err, result) {
  if (err) {
  	console.log(err);
  	return;
  }
  console.log(result[0].author);
});