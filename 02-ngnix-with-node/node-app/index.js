const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};

app.get('/', (req, res) => {
  const connection = mysql.createConnection(config)

  let sql = `INSERT INTO people(name) values ('Anderson')`;
  connection.query(sql);
  
  sql = `SELECT * FROM people`;
  let ret = '<h1>Full Cycle Rocks!</h1>';

  connection.query(sql, (error, data, fields) => {
      if (error) {
          ret += error.message;
      } else {
          if (data.length > 0) {
              ret += '<ul>'

              data.forEach((row) => {
                  ret += `<li>${row.name}</li>`;
              });

              ret += '</ul>'
          }
      }
      res.send(ret);
      connection.end();
  });
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
