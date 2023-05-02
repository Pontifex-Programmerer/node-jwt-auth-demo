const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const minpasslength = 7;

// The schema is the definition of how the model shall be structured
// It is a set of rules and behaviors that the model must obey.
const userschema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: [minpasslength, `Your password must be at least ${minpasslength} characters long`]
    }
})

// This method registers a new function to be called before
// any save method is called on the model.
userschema.pre('save', async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});


// This methodis always called after the save method is completed
userschema.post('save', async function(doc, next){

    next();
});

// The login method will be registered to the User model
// Static methods are methods that behave exactly the same on all
// Objects.
userschema.statics.login = async function (username, password){
    const user = await this.findOne({username});
    if(user){
        console.log('found user', user.password)
        const auth = await bcrypt.compare(password, user.password);
        if(auth) {
            return user;
        }
    }
    throw Error('Credentials could not be validated. Wrong username or password!');
}

// Finally we create and export the User model by passing the userschema and
// the name of proposed database to the mongoose.model method and store the
// result in the User variable.
const User = mongoose.model('user', userschema);
module.exports = User;
