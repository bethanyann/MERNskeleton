require('dotenv').config();
const express = require('express');


// create express app server
const app = express();

// assign a piece of middleware that will fire anytime a request comes in to the server
app.use((req, res, next) => {
    // log out the path every time we get a request for testing
    console.log(req.path, req.method);
    next();
});

// set up a route handler that responds to a get request coming in at the root of the app
app.get('/', (req, res) => {
    res.json({msg: 'welcome to the app!'});
});

// listen for requests - PORT defined in .env file
app.listen(process.env.PORT, () => {
    console.log('listening on port 4000')
});