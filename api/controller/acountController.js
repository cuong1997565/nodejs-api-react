const mongoose = require("mongoose");
const Acount = require("../model/acount");
const path = require("path");
const del = require("del");
exports.acount_list = (req,res,next) => {
    Acount.find().sort({_id : -1})
    .select('personId email password _id phone')
    .populate("personId")
    .exec()
    .then(result => {
        if(result.length >= 0) {
            res.status(200).json({
                message  : "Handling Get requests to /acount",
                count    : result.length,
                acount  : result.map(result => {
                    return {
                        _id     : result._id,
                        personId  : result.personId,
                        email     : result.email,
                        password  : result.password,
                        phone     : result.phone,
                        image :     result.image, 
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

exports.acount_create = (req, res, next)  => {
    const acount = new Acount({
        _id   : new mongoose.Types.ObjectId(),  
        personId  : req.body.personId,
        email     : req.body.email,
        password  : req.body.password,
        phone     : req.body.phone,
        image     : req.file.path 
    });

    acount.save().then(result => {
        res.status(201).json({
            message : "Handling Post requests to /acount",
            createAcount : {
                _id   : new mongoose.Types.ObjectId(),  
                personId  : result.personId,
                email     : result.email,
                password  : result.password,
                phone     : result.phone,
                image     : result.image, 
                request: {
                    type : 'GET',
                    url  : 'http://localhost:4000/acount/'+ result._id 
                } 
            }
        }).catch(err => console.log(err));
    });
}

exports.acount_edit = (req,res,next) => {
    Acount.findById(req.params.acountId)
    .select('personId email password _id phone image')
    .populate("personId")
    .exec()
    .then(result => {
        if(!result) {
            return res.status(404).json({
                message : "Acount not found"
            })
        } else{
            res.status(200).json({
                message : 'Acount details',
                acount: {
                    _id     : result._id,
                    personId  : result.personId,
                    email     : result.email,
                    password  : result.password,
                    phone     : result.phone,
                    image :     result.image, 
                },
                request : {
                    type : "GET",
                    url : "http://localhost:3000/acount/"+result._id
                }
            })
        }
    }).catch(err => {
            res.status(500).json({
                error : err
            })
    });

}

exports.acount_update = (req, res, next) => {
    const id = req.params.acountId;
    const acount = new Acount({
        personId  : req.body.personId,
        email     : req.body.email,
        password  : req.body.password,
        phone     : req.body.phone,
        image     : req.file.path 
    });
    Acount.update({_id: id},{$set : acount})
    .exec()
    .then(result => {
        res.status(200).json({
            message : 'Update acount!',
            acount : result,
            request : {
                type : 'GET',
                url : 'http://localhost:3000/acount/'+id
            }
        })
    }).catch(err => {
        res.status(500).json({
            error : err
        })
    })
}

exports.acount_delete = (req,res,next) => {
    const id = req.params.acountId;
    Acount.findById(id)
    .select('image')
    .exec()
    .then(result => {
        del([path.join("upload", result.image)]).then(deleted => {
            console.log("remove file");
        })
    }).catch(err => {
        res.status(500).json({
            error : err
        })
    })
    
}