const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.state = {};

app.get('/', (req, res, next) => {
});

app.post('/login', (req, res, next) => {
});

app.POST('/swipe', (req, res, next) => {
});