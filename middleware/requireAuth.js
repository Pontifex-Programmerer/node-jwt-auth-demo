const jwt = require('jsonwebtoken');
const User = require('../models/User');

const requireAuth = (req, res, next) => {
    if(req.cookies && req.cookies.jwt){
        const token = req.cookies.jwt;
        if(token){
            jwt.verify(token, process.env.JWTSECRET, async (err, decodedtoken) => {
                if(err){
                    // Token not valid - could be tampering, but also corruption
                } else {
                    const user = await User.findById(decodedtoken.userId);
                    res.locals.user = user;
                    next();
                }
            })
            console.log('got token!', token)
        }
    } else {
        res.redirect('/login')
    }
}

// This function checks if the token matches a user. If it does, it sets
// res.locals.user to be the user that matches the token so that we can
// access that value elsewhere in the application.
const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if(token){
        jwt.verify(token, process.env.JWTSECRET, async (err, decodedToken) => {
            if(err){
                console.log(err.message);
            } else {
                const user = await User.findById(decodedToken.userId);
                res.locals.user = user;
            }
            next();
        })
    } else {
        res.locals.user = null;
        next();
    }
}

module.exports = {requireAuth, checkUser};
