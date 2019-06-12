const express = require('express');
const axios = require('axios');

const app = express();

app.get('/hello', (_, res) => {
  res.send('hello world');
});

app.get('/characters', async (_, res) => {
  const { data: { results = [] } = {} } = await axios.get('https://swapi.co/api/people');
  console.log('whats happening', results);
  const parsedData = results.map(({ name }) => ({
    id: Math.ceil(Math.random() * 1000000),
    name,
    age: Math.ceil(Math.random() * 18),
    score: Math.ceil(Math.random() * 50)
  }));
  return res.send(parsedData);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, _ => console.log(`Server is running on port ${PORT}`));
