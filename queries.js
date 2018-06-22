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

function selectAll() {
  connection.query('SELECT * from articles', function(err, result) {
	  if (err) {
	  	console.log(err);
	  	return;
	  }
	  let screenNameToFind = "Noel Caceres";
	  let count = 0;
	  for (let i=0; i<result.length; i++) {
	  	if (result[i].author === screenNameToFind) {
	  		count++;
	  		// delete, if there is more than 1
	  		if (count > 1) {
	  			const q = "DELETE FROM articles WHERE id = " + result[i].id;
	  			connection.query(q, function(err, result) {

	  			});
	  			if (err) {
	  				console.log(err);
	  				return;
	  			}
	  			console.log("deleted an extra");
	  			count--;
	  		}
	  		console.log("name found!");
	  	}
	  }
	});
}






