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
//   console.log('req.body before parser');
//   console.log(req.body);
//   next();
// })

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use((req, res, next) => {
//   console.log('req.body after parser');
//   console.log(req.body);
//   next();
// })

// app.state = {};

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
    // console.log('restaurantData');
    // console.log(data);
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
  // console.log(req);
  // console.log(req.body);
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
  // connect.query('select * from users where username = ""')
  // res.sendStatus(200);
});

app.post('/swipe', (req, res, next) => {
  console.log('post/swipe');
  console.log(req.body);

  connection.query(`select id from users where username = "${req.body.user}";`, (err, data) => {
    if(err) {
      console.error(err);
    }
    console.log('data');
    console.log(data);

    connection.query(`select * from matches where matches = ${req.body.restaurantId};`, (err, nextData) => {
      console.log('nextData');
      console.log(nextData);

      // console.log('data[0].id');
      // console.log(data[0].id);
      var user1IsTaken
      // = nextData ? !!nextData.user1 && nextDatauser1 !== data.id[0] : false;

      if (nextData[0]) {
        if (nextData[0].id !== null && nextData[0].id !== data[0].id) { //user1 is taken by another user //send match
          user1IsTaken = true;
        } else {
          user1IsTaken = false;
        }
      } else {
        user1IsTaken = true;
      }

      //cases: (assumes 'user1')
      //user1 is taken by user1 //do nothing
      //user1 is taken by user2 //set to 2, send match
      //user1 is not taken //set to 1, send nomatch
      //nextData is null //set to 1, send nomatch


      console.log('user1IsTaken: ', user1IsTaken);
      if (user1IsTaken) {
        connection.query(`insert into matches (user1, matches) values (${data[0].id}, ${req.body.restaurantId});`, (err, thirdData) => {
          if (err) {
            console.error(err);
          }
          console.log('data[0].id');
          console.log(data[0].id);
          console.log('req.body.restaurantId');
          console.log(req.body.restaurantId);
          console.log('thirdData');
          console.log(thirdData);
          console.log('nomatch');
          res.send('nomatch');
        })
      } else {
        console.log('match');
        res.send('match');

      }
    })
  })
});

app.get('/jpg', (req, res, next) => {
  // console.log('get jpg params')
  // console.log(req.url);
  var image = req.url.split('?')[1];
  res.sendFile(path.resolve(__dirname, `images/${image}.jpg`));
});