const port = 8080;
const express = require('express');
const sqlite3 = require('better-sqlite3');

const app = express();

// create a new database connection
const db = new sqlite3('users.SQLite');

// define a route that returns the result of the query
app.get('/api/users', (req, res) => {
  const rows = db.prepare('select * from users').all();
  res.json(rows);
});

// start the server
app.listen(port, () => {
  console.log('Server listening on port '+port);
});
