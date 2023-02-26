require('dotenv').config();
const express = require('express');
const routes = require('./routes');

// create express app server
const app = express();

// assign a piece of middleware that will fire anytime a request comes in to the server
app.use(express.json());
app.use((req, res, next) => {
    // log out the path every time we get a request for testing
    console.log(req.path, req.method);
    next();
});

// grabs all of the different routes that are attached to the express router in the routes.js file 
app.use('/api', routes); 


// listen for requests - PORT defined in .env file
app.listen(process.env.PORT, () => {
    console.log('listening on port 4000')
});