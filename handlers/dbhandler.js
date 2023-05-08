const mongoose = require('mongoose');

function connectToDB(DBSTRING){
    let connections = null;
    mongoose.set('strictQuery', false);
    mongoose.connect(DBSTRING)
        .then(result => {
                connections = result.connections;
                result.connections.forEach(connection => {
                console.log(`connected to ${connection.name}`)
            });
        })   
        .catch(err => {
            console.log(err);
        })
}

module.exports  = {connectToDB};