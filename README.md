# node-jwt-auth-demo

This is a demo of JWT and how you can use cookies, bcrypt and mongoDB to create an authentication system for your web-site.

# .env

To deploy the site you must create **.env** file containing the following keys;

* DBURI=[*your mongodbpath here*]
* BCRYPTSECRET=[*your bcrypt secret key for hashing passwords here..*]

# .gitignore

Make sure yoru *.gitignore* includes your *.env* so it isn't shared to your github!
