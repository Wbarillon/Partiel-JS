/* 
Import
*/
    require('dotenv').config();
    const express = require('express');
    const ejs = require('ejs');


    /* 
    You need to import the module to use the data from the body of a request and client vue folder
    - https://www.npmjs.com/package/body-parser
    - https://www.npmjs.com/package/path
    */
        //=> Start coding here...
        const bodyParser = require('body-parser');
        const path = require('path');
        const mongoDB = require('./services/db.connect');
    //
//


/* 
Config
*/
    /* 
    You need to define a const for the server and the port
    */
        //=> Start coding here...
        const server = express();
        const port = process.env.PORT;
    //

    class ServerClass{
        init(){

            /* 
            You need to configure the module to use the data from the body of a request
            https://www.npmjs.com/package/body-parser
            */
                //=> Start coding here...
                server.use(bodyParser.json({limit: '10mb'}));
                server.use(bodyParser.urlencoded({ extended: true }));
            //

            //=> Use path to add views
            server.set( 'view engine', 'ejs' );
            server.set( 'views', __dirname + '/www' );
            server.use( express.static(path.join(__dirname, 'www')) );

            /* 
            Router import & configuration
            !! Don't edit this code unless you are sure of what you do !!
            */
                const FrontRouterClass = require('./routes/front.router');
                const frontRouter = new FrontRouterClass();
                server.use('/', frontRouter.init());

                /* 
                You need to start your serverr
                */
                    //=> Start coding here...
                    this.launch();
                //
            //
        };

        /* 
        Lauch method
        !! Don't edit this code unless you are sure of what you do !!
        */
            launch(){
                // Connect MongoDB
                mongoDB.initClient()
                .then(mongooseResponse => {
                // Launch server
                server.listen(port, () => console.log({database: mongooseResponse, server: `http://localhost:${port}` }))
                })
                .catch(mongooseError => console.log(mongooseError));
            }
        //
    };
//


/* 
Start
!! Don't edit this code unless you are sure of what you do !!
*/
    new ServerClass().init();
//