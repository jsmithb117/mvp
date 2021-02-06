/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const express = require('express');
const bodyParser = require('body-parser');
const connection = require('../db/index');
const path = require('path');

const app = express();
const port = 3000;

connection.connect();

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
  console.log('get/');
  res.sendFile(path.resolve('../dist/index.html'));
});
app.get('/index.js', (req, res, next) => {
  console.log('get/index.js');
  res.sendFile(path.resolve('../dist/index.js'));
});

app.get('/restaurants', (req, res, next) => {
  console.log('get/restaurants');
  connection.query('select * from restaurants;', (err, data) => {
    if (err) {
      console.error(err);
    }
    res.send(data);
    console.log('got restaurants');
  })
})

// app.get('/code', (req, res, next) => {
// })

// app.post('/code', (req, res, next) => {
// })

app.post('/login', (req, res, next) => {
  console.log('post/login');
  connection.query(`select pword from users where username = "${req.body.username}"`, (err, response) => {
    if (req.body.password === response[0].pword) {
      console.log('Auth successful');
      res.send(JSON.stringify(req.body.username));
      next();
    } else {
      console.log('Auth failed');
      res.sendStatus(401);
    }
  })
});

app.post('/swipe', (req, res, next) => {
  console.log('post/swipe');
  console.log(req.body);
//Faking the whole thing.  If restaurantId is an even number, it responds with a match
  if (req.body.restaurantId % 2 === 0) {
    res.send('match');
  } else {
    res.send('nomatch');
  }
});

app.get('/jpg', (req, res, next) => {
  var image = req.url.split('?')[1];
  res.sendFile(path.resolve(__dirname, `images/${image}.jpg`));
});