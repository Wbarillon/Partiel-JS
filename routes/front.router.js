/*
Imports & configuration
!! Don't edit this code unless you are sure of what you do !!
*/
  // Class
  const express = require('express');
  const classRouter = express.Router({ mergeParams: true });
  const userCollection = require('../data/users');
// 


/*
Class definition
*/
  class RouterClass {
    
    constructor(){}

    // Définition des routes
    routes(){
        /* 
        Route to display the home page
        - To send data to the route, juste add an object has second param   
        */
          classRouter.get( '/', (req, res) => {
            res.render('index', { connectedUser: 'undefined', userCollection: userCollection })
          });
        //

        /* 
        Route to connect a user
        - Make 2 const to get email and password from the request
        - Make a loop on the const 'userCollection'
        - Check if you find the email
        - Check if the password is correct
        - Send back the correct page
        */
          classRouter.get( '/login', (req, res) => {
              res.render('login')
          });
        //

        /* 
        Route to display conneted user informations
        - Make a loop on the const 'userCollection'
        - Find the correct information about the user
        - Send back the correct page with the data
        */
          classRouter.get( '/me', (req, res) => {
              res.render('me')
          });
        //

        /* 
        Route test API
        */
          classRouter.post( '/api', (req, res, next) => {
            return res.json(req.body)
          });
        //

        classRouter.post('/login', (req,res) => {

          let connection = 0;

          const userEmail = req.body.userEmail;
          const userPassword = req.body.userPassword;
                       
          for (let i = 0; i < userCollection.length; i++) {
            if (userCollection[i].email == userEmail
                &&
                userCollection[i].password == userPassword) {
              connection = 1; 
              res.redirect('/me');
            }
          }
          if (connection == 0) {
            res.render('login')
          }
        });
    };

    /* 
    Initialize routes 
    !! Don't edit this code unless you are sure of what you do !!
    */
    init(){
        this.routes();
        return classRouter;
    };
  };
//


/*
Export class
!! Don't edit this code unless you are sure of what you do !!
*/
    module.exports = RouterClass;     //To server.js l.54
//