const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const port = 3000;

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || 'peopledb'
};

app.get('/', async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    await connection.execute('INSERT INTO people (name) VALUES (?)', ['John Doe']);
    const [rows] = await connection.execute('SELECT name FROM people');
    const names = rows.map(row => row.name).join(', ');

    res.send(`
      <h1>Full Cycle Rocks!</h1>
      <p>Names: ${names}</p>
    `);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
