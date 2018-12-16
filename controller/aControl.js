
var auth = require('../auth/uAuth');

exports.login = function(req,res,next){

    var token = auth.userToken(req.body.username);
    console.log(token)
    res.status(200).json({token:token})
}