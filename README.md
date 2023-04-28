# node-jwt-auth-demo

This is a demo of JWT and how you can use cookies, bcrypt and mongoDB to create an authentication system for your web-site. You can clone and study this code to grasp a better understanding of how to apply these modules and structure your code to achieve secure and readable code following best practices.

# .env

To deploy the site you must create **.env** file containing the following keys;

* DBURI=[*your mongodbpath here*]
* BCRYPTSECRET=[*your bcrypt secret key for hashing passwords here..*]
* RUNNINGPORT=[PORT]

# .gitignore

Make sure yoru *.gitignore* includes your *.env* so it isn't shared to your github!
