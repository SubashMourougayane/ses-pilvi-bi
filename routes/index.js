var express = require('express');
var router = express.Router();
const accounts = require('./accounts')
const users = require('./users')


router.use('/accounts',accounts)


/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
});

module.exports = router;
