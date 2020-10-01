var express = require('express');
var router = express.Router();
var controller = require('../controllers/controllers');
/* GET home page. */
router.get('/', controller.index);

router.get('/login', controller.getLogin);
router.post('/login', controller.postLogin);
router.get('/register', controller.getRegister);
router.post('/register', controller.postRegister);
// router.use('login')
module.exports = router;
