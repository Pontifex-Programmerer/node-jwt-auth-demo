const router = require('express').Router();


//Controllers for default routes
const {index, login, createuserform} = require('../controllers/defaultController');
const {authenticate, createuser} = require('../controllers/authenticationController');

router.get('/', index);

router.get('/login', login);

router.post('/login', authenticate)

router.get('/createuser', createuserform);

router.post('/createuser', createuser);

module.exports = router;