const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Acount = new Schema({
    _id : mongoose.Schema.Types.ObjectId,
    personId : { type: mongoose.Schema.Types.ObjectId, ref: 'Persons'},
    email : {
        type: String
    },
    password: {
        type: String
    },
    phone: {
        type: Number
    },
    image : {
        type: String
    }
}, {
    collection : 'acount'
});
module.exports = mongoose.model('Acount', Acount);