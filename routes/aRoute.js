var express = require('express'),
router = express.Router(),
controller = require('../controller/aControl'),
auth = require('../auth/uAuth')

router.route('/')
      .post(auth.checkUser,controller.login)

 module.exports = router;