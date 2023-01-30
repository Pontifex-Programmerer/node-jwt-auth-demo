const router = require('express').Router();
const {requireAuth} = require('../middleware/requireAuth');

router.get('/secretpage',requireAuth, (req, res) => {
    res.render('./secret.ejs');
})

router.get('/logout', requireAuth, (req, res) => {
    res.cookie('jwt','', {maxAge: 1});
    res.status(200).redirect('/')
})

module.exports = router;