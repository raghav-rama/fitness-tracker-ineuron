const keys = require("./keys");


// Express Application setup
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Postgres client setup
const { Pool } = require("pg");
const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort
});

pgClient.on("connect", client => {
  client
    .query("CREATE TABLE IF NOT EXISTS user_info (id SERIAL PRIMARY KEY, full_name VARCHAR(255) NOT NULL, username VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL);")
    .catch(err => console.log("PG ERROR", err));
});

//Express route definitions
app.get("/", (req, res) => {
  res.send("Hi");
});

// get the values
app.get("/values/all", async (req, res) => {
  const values = await pgClient.query("SELECT * FROM user_info;");

  res.send(values);
});

app.post('/api/authenticate', async (req, res) => {
  const { username, password } = req.body;

  const client = pgClient.connect();
  try {
    const queryText = 'SELECT * FROM user_info WHERE username = $1 AND password = $2';
    const result = await pgClient.query(queryText, [username, password]).then(() => {
      console.log("autheticated");
    });
    // if (result.rows.length === 0) {
    //   return res.status(401).json({ message: 'Invalid credentials' });
    // }
    // generate and return JWT
    const payload = { username };
    const token = jwt.sign(payload, keys.SECRET_KEY, { expresIn: '300s' }, (err, token) => {
      res.json({ token });
    });
    return res.json({ token });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  } finally {
    // client.release();
  }
});

app.post('/api/signup', async (req, res) => {
  const { full_name, username, email, password } = req.body;

  const insertQuery = 'INSERT INTO user_info (full_name, username, email, password) VALUES ($1, $2, $3, $4)';
  const values = [full_name, username, email, password];

  const result = await pgClient.query(insertQuery, values);

  // if (result.rows.length === 0) {
  //   return res.status(401).json({ message: 'Invalid credentials' });
  // }

});

app.listen(5000, err => {
  console.log("Listening on port 5000");
});
