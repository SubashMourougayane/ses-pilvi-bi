var express = require('express');
var router = express.Router();

const accountsController = require('../controllers/accounts');

router.post('/signup', accountsController.signup);
router.post('/login', accountsController.login);



module.exports = router;
