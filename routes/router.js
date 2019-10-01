const express = require('express')
const router = express.Router()
//const mongoose = require('mongoose');
const user = require('../models/users');

router.get('/', (req, res, next)=> {
    user.find({}, (err, doc)=>{
        if(err) res.status(500).send({message:'Error'});
        res.status(200).send(doc);
    });
});


router.post('/', (req, res, next)=> {
    console.log(req.body);
    const newUser = new user(req.body);
    newUser.save((err, doc)=> {
        if(err)  if(err) res.status(500).send(err);
        res.status(201).send(doc);
    })
});

module.exports = router;