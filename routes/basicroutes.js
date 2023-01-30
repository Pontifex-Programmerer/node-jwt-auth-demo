const router = require('express').Router();


//Controllers for default routes
const defaultController = require('../controllers/defaultController');
const authenticationController = require('../controllers/authenticationController');

//Controllers for the API
const api = require('../controllers/apicontroller');

router.get('/', defaultController.index);

router.get('/login', defaultController.login);

router.post('/login', authenticationController.authenticate)

router.get('/createuserform', defaultController.createuserform);

router.post('/createuser', api.createuser);

module.exports = router;