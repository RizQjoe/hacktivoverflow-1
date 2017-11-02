'use strict'

const jwt = require('jsonwebtoken')
const User = require('../models/User')
const helpers = require('../helpers/auth')

let registers = (req,res)=>{
   const key = helpers.randomKey();
   const pass = helpers.hash(req.body.password, key)
   User.create({
       username:req.body.username, 
       name: req.body.name,
       password: req.body.password,
       email: req.body.email
    })
    .then(res =>{
        res.send(res)
    })
    .catch(err =>{
        res.json({
            error: err,
            message: 'Registration has faild'
        })
    })
}