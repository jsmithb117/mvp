const express = require('express');
const bodyParser = require('body-parser');

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
  res.end();
});

app.post('/login', (req, res, next) => {
  console.log('post/login');
  res.end();

});

app.post('/swipe', (req, res, next) => {
  console.log('post/swipe');
  res.end();

});