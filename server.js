const mysql = require('mysql2');
const express = require('express');

const connection = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'evel',
    database : 'budget_db'
  });
  
  const app = express();
  
  app.get('/', function (req, res) {

    connection.getConnection(function (err, connection) {
  
      connection.query('SELECT * FROM expenses', function (error, results, fields) {
        
        if (error) throw error;
  
        res.send(results)
      });
    });
  });
  
  app.listen(3000, () => {
   console.log('Go to http://localhost:3000/users so you can see the data.');
  });
