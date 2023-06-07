require('dotenv').config();
//require express
const express = require('express');
var cors = require('cors')
const app = express();

app.use(cors());
//create port
const port = process.env.PORT || 8000;

//set view engine as ejs
app.set('view engine','ejs');
app.set('views','./views');

//use static files
app.use(express.static('assets'));

//use form data sent by post
app.use(express.urlencoded({ extended: true }));   

//use the router
app.use('/',require('./routes/index'));

//create port listener
app.listen(port,function(err){
    if(err){
        console.log('Error running the server!',err);
    }
    console.log('My server is running on port:',port);
});