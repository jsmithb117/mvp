const express = require('express');
const bodyParser = require('body-parser');
const connection = require('../db/index');
const path = require('path');

const app = express();
const port = 3000;


app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
})

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.state = {};

app.get('/', (req, res, next) => {
  console.log('get/');
  res.sendFile(path.resolve('../dist/index.html'));
});
app.get('/index.js', (req, res, next) => {
  console.log('get/');
  res.sendFile(path.resolve('../dist/index.js'));
});

app.post('/login', (req, res, next) => {
  console.log('post/login');
  res.end();
});

app.post('/swipe', (req, res, next) => {
  console.log('post/swipe');
  res.end();
});