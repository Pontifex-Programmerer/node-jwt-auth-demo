const User = require('../models/User')
const jwt = require('jsonwebtoken');


const authenticate = async (req, res, next) => {
    console.log('trying to authenticate');
    const {username, password} = req.body;
    if(username && password){
        const user = await User.login(username, password);
        if(user){
            const token = jwt.sign({userId: user._id}, process.env.JWTSECRET, {expiresIn: 24*60*60*1000});
            const maxage = 1000*60*60*24; //24 hours in millis..
            res.cookie('jwt', token, {httpOnly: true, maxage}) 
            //preferrably a users own page tbh.
            res.status(200).redirect('/secretpage');
        } else {
            res.status(401).redirect('/login');
        }
    }

    
}

module.exports = {authenticate};