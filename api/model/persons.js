const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Persons = new Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name : {
        type: String
    },
    company: {
        type: String
    },
    age: {
        type: Number
    }
}, {
    collection : 'persons'
});
module.exports = mongoose.model('Persons', Persons);