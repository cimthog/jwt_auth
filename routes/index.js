var express = require('express'),
router = express.Router();

router.get('/',(req,res)=>{
    res.sendFile('dashboard.html', { root: path.join(__dirname, '../public') });
})
module.exports = router