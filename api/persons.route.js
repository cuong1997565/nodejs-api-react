const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message : "Handling Get requests to /products"
    });
});

router.post('/', (req, res, next) => {
    console.log(req.body);
});

module.exports = router;
