const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const personsRoutes = require('./router/persons');
const config = require('./db');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected')},
    err => { console.log('Can not connect to the database'+ err)}
)

app.use(cors());
app.use(bodyParser.urlencoded({extend : false}));
app.use(bodyParser.json());


app.use('/persons', personsRoutes);


app.use((req,res,next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error : {
            message : error.message
        }
    })
});


//routes which should handle requests

module.exports = app;
