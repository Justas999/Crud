const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');

const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());

//Logic

const Jokes = [];

//Routes

app.get('/', (req, res) => res.json('API is running!...'));

// app.get("/api/jokes/", get10Jokes);
// app.get("/api/jokes/:amount", getCustomNumber);
// app.get("/api/jokes/:category", get10JokesFromCategory);
// app.get("/api/jokes/:category/:amount", getCustomNumberJokesFromCategory);

app.listen(process.env.PORT, () =>
  console.log(`Server is running on port: ${process.env.PORT}`)
);
