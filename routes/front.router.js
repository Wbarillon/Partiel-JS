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
        - To send data to the route, juste add an object has second param   connectedUser: 'undefined',
        */
          classRouter.get( '/', (req, res) => {
            res.render('index', { userCollection: userCollection })
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
           
              const userEmail = req.body.userEmail;
              console.log(userEmail);
              const userPassword = req.text;
              console.log(userPassword);
                           
              for (let i = 0; i < userCollection.length; i++) {
                if (userCollection[i].email == userEmail) {
                  console.log('mmmh');
                }
                else {
                  console.log(userCollection[i].email);
                }
              }
              
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
          classRouter.post( '/api', (req, res) => {
            console.log('Les données arrivent sur l\'api');
            console.log(req.body.userEmail);
            console.log(req.body.userPassword);
            return res.json(req.body)
          });
        //
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
    module.exports = RouterClass; //To server.js l.54
//