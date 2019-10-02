const express = require('express')
const router = express.Router()
const ObjectId= require('mongoose').Types.ObjectId;
const user = require('../models/users');

router.get('/user', (req, res, next)=> {
    user.find({}).exec().then(result =>{
        res.status(200).send(result);
    }).catch(error =>{
        res.status(500).send({message:error});
    })    
});

router.get('/user/:id', (req, res, next)=> {
    if(ObjectId.isValid(req.params.id)){
        user.findOne({_id:req.params.id}).exec().then(result =>{
            res.status(200).send(result);
        }).catch(error =>{
            res.status(500).send({message:error});
        })
    } else{
        res.status(201).send({message: "Invalid ID"});
    }        
});


router.post('/user', (req, res, next)=> {
    console.log(req.body);
    const newUser = new user(req.body);
    newUser.save().then(result =>{
        res.status(201).send(result);
    }).catch(error =>{
        res.status(500).send({message: error});
    })    
});

router.delete('/user/:id', (req, res, next)=> {
    if(ObjectId.isValid(req.params.id)){
        user.findOneAndDelete({_id:req.params.id}).then(result => {
            res.status(201).send({message: "user Deleted"});
        }).catch(error => {
            res.status(500).send({message: error});
        })
    } else{
        res.status(201).send({message: "Invalid ID"});
    }   
});

router.put('/user/:id', (req, res, next)=> {
    if(ObjectId.isValid(req.params.id)){
        user.findOneAndUpdate({_id:req.params.id},req.body).then(result => {
            res.status(201).send({message: "user Updated"});
        }).catch(error => {
            res.status(500).send({message: error});
        })
    } else{
        res.status(201).send({message: "Invalid ID"});
    }   
});


module.exports = router;