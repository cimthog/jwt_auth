var express = require('express'),
router = express.Router(),
user = require('../controller/uControl'),
auth = require('../auth/uAuth')
path = require('path');

router.route('/')
      .get(auth.checkToken,user.getCachedUsers)

module.exports = router;
