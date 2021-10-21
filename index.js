var config = require("./config"),
    fs = require("fs"),
    express = require('express'),
    path = require('path'),
    app = require('express')();
    http = require('http').Server(app),
    mongoose = require('mongoose'),
    mongodb = mongoose.connection,
    mongoPath = config.mongoPath,
    bodyParser = require('body-parser'),
    bcrypt = require('bcrypt-nodejs'),
    httpPort = process.env.PORT || config.port;

const User = require('./models/user.js').User;
const register = require('./apis/post/register.js');
const login = require('./apis/post/login.js');

// mongoDB init
var mongoDBFunction = (function(){
    mongodb.on('error', function(){
        console.log("Error connecting to the mongo DB");
    });
    mongodb.once('open', function(){
        var m = mongoPath.substring(mongoPath.lastIndexOf('/')+1, mongoPath.length);
        console.log("Connected to mongoDB: '"+m+"'");
        httpServerFunction();
    });
    mongoose.connect(mongoPath);
}());

//send file request
function httpServerFunction(){
    // static
    app.use('/', express.static((path.join(__dirname,'../dist'))));
    // /logout
    app.get('/games', function (req, res) {

    });

    app.use(bodyParser.json({limit: "50mb"}));
    app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}))
    
    app.post('/register', register.register);
    app.post('/login', login.login);
    //http listen
    http.listen(httpPort, function(){
        console.log('listening on:' + config.port);
    });
};

module.exports = app