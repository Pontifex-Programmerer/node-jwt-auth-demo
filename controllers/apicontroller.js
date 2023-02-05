const User = require('../models/User');


/**
 * @param {*} req The request object
 * @param {*} res The response object
 * The createuser function handles requests to create a user. In
 * our application that means from the user form. If a user is 
 * created, they will be sent to the newuser page, else an error
 * object
 */
const createuser = async (req, res) => {
    const {username, password} = req.body;
    let error = false;
    let result = null;
    
    // Try catch is a way of handling errors that might happen
    // beyond the scope of your own actions, such as system 
    // errors, network disruptions or API request errors
    try {
        result = await User.create({username, password});
    } catch(err) {
       error = err;

    }
    
    url = '/secretpage';
    // responds either with an error, or with a user. Result 
    // should be null if an error has occurred.
    res.json({
        error, result, url
    });
}

module.exports = {
    createuser
}