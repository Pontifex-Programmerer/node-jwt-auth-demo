
// This file just keeps all the basic controller for the sake of example
// It might be considered a bit pedantic to create named functions for 
// a small program such as this, but it is good practice anyhow!

const index = (req, res, next) => {
    res.render('index');
}

const login = (req, res, next) => {
    res.render('login');
}

const logout = (req, res, next) => {
    res.render('logout');
}

const createuserform = (req, res, next) => {
    res.render('createuser');
}

module.exports = {
    index,
    login,
    logout,
    createuserform}

