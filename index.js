const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const app = express();
const port = 8080;

// Open a SQLite database connection
let db = new sqlite3.Database('users.SQLite', sqlite3.OPEN_READONLY, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the users database.');
});

// Define an API endpoint that retrieves all rows from the "users" table and returns them as JSON
app.get('/api/users', (req, res) => {
  db.all('SELECT * FROM users', [], (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(rows);
    }
  });
});
app.get('/', (req, res) => {
  res.send('users.SQLite api');
});
// Start the API server
app.listen(port, () => {
  console.log(`API server listening at http://localhost:${port}`);
});
