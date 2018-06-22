const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'articles'
});
connection.connect();

// insert following article
const article = {
	author: 'Noel Caceres',
	title: 'Node Mysql',
	body: 'foo bar'
};

// insert data
function insert(item) {
  let query = connection.query('insert into articles set ?', item, function(err, result) {
	  if (err) {
	  	console.log(err);
	  	return;
	  }
	  console.log(query.sql);
	});
}

insert(article);



