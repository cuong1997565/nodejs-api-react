const mongoose = require("mongoose");
const Person = require("../model/persons");

exports.person_all =  (req, res, next) => {
    Person.find().sort({_id : -1})
    .select('name company age _id')
    .exec()
    .then(result => {
        if(result.length >= 0) {
            res.status(200).json({
                message  : "Handling Get requests to /Person",
                count    : result.length,
                persons  : result.map(result => {
                    return {
                        _id     : result._id,
                        name    : result.name,
                        company : result.company,
                        age     : result.age,
                        request : {
                            type : 'GET',
                            url  : 'http://localhost:4000/'+result._id 
                        }
                    }
                })
            })
        } else {
            res.status(404).json({
                message : 'no entries found'
            })
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error : err
        })
    });
}

exports.person_create = (req, res, next) => {
    const person = new Person({
        _id   : new mongoose.Types.ObjectId(),
        name  : req.body.name,
        company : req.body.company,
        age : req.body.age 
    });
    person.save().then(result => {
        res.status(201).json({
            message : "Handling Post requests to /persons",
            createPerson : {
                _id : result._id,
                name  : result.name,
                company : result.company,
                age : result.age,
                request: {
                    type : 'GET',
                    url  : 'http://localhost:4000/persons/'+ result._id 
                } 
            }
        }).catch(err => console.log(err));
    });
}

exports.person_edit = (req, res, next) => {
    const id = req.params.personId;
    Person.findById(id)
    .select('name company age _id')
    .exec()
    .then(response => {
        if(response) {
            res.status(200).json({
                message : 'You discovered the special ID',
                person :  response,
                request : {
                    type : 'GET',
                    url : 'http://localhost:3000/persons/'+response._id
                }
            });
        } else{
            res.status(404).json({message : 'No valid entry found for provided ID' })
        }
    }).catch(err => {
        console.log(err);
        res.status(200).json({
            error : err
        });
    });
}

exports.person_update = (req,res,next) => {
    const id = req.params.personId;
    const update = {
        name    : req.body.name,
        company : req.body.company,
        age     : req.body.age
    };
    Person.update({ _id: id }, { $set: update})
    .exec()
    .then(result => {
        res.status(200).json({
            message : 'Update person!',
            person: result,
            request: {
                type : 'GET',
                url : 'http://localhost:4000/persons/'+ id
            }
        })
    }).catch(err => {
        res.status(500).json({
          error: err
        });
    });
    
}

exports.person_delete = (req, res, next) => {
    const id = req.params.personId;
    Person.remove({_id : id})
    .exec()
    .then(response => {
        res.status(200).json({
            message : 'Deleted person!',
            request : {
                type : 'POST',
                url : 'http://localhost:3000/persons'
            }
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error : err
        })
    })
}


exports.acount_sreach = (req, res, next) => {
    console.log(req.params.keyword);
}