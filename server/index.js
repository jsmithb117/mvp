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

// app.use((req, res, next) => {
//   console.log('req.body');
//   console.log(req.body);
//   next();
// })

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use((req, res, next) => {
//   console.log('req.body');
//   console.log(req.body);
//   next();
// })

app.state = {};

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

app.get('/code', (req, res, next) => {
  //must send username in body or params
  console.log('code request');
  // console.log(req);
  //do select code from users where user = {username}
    //if code exists, return to client
    //else return 410(gone).  I could use 404 here, but I don't want to confuse that with any of the 1000 other reasons you'd get a 404.
})

app.post('/code', (req, res, next) => {

})
app.post('/login', (req, res, next) => {
  console.log('post/login');
  console.log(req)
  res.sendStatus(200);
});

app.post('/swipe', (req, res, next) => {
  console.log('post/swipe');
  // res.end();
});

