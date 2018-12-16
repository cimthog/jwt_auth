const bcrypt = require('bcrypt'),
User = require('../models/users')
jwt = require('jsonwebtoken')
expressjwt = require('express-jwt')
verifyToken = expressjwt({secret:"froyo"});


exports.checkUser = function(req, res,next){
    User.findOne({username: req.body.username})
    .exec()
    .then(function(user) {
        if(err) throw err;
        if(!user){
            return res.status(401).json({
                failed: 'No user found'
             });
        }

       bcrypt.compare(req.body.password, user.password, function(err, result){
          if(err) {
             return res.status(401).json({
                failed: 'Invalid Password'
             });
          }

        })
       
    })
    .catch(error => {
       res.status(500).json({
          error: error
       });
    });
    next()
}

exports.userToken = function(username){
     return jwt.sign(
         {username:username},
         "froyo",
         {expiresIn: '24h'}
         
     )
 };

exports.checkToken = function(req,res,next){
    verifyToken(req,res,next)
  
}