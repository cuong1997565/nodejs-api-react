const express = require('express');
const app = express();
// const morgan = require("morgan");
const bodyParser = require('body-parser');


const mongodb = require('mongodb');

// app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extend : false}));
app.use(bodyParser.json());

//routes which should handle requests

module.exports = app;
