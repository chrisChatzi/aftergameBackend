const config = require("./config"),
    express = require('express'),
    path = require('path'),
    app = require('express')();
    http = require('http').Server(app),
    mongoose = require('mongoose'),
    mongodb = mongoose.connection,
    mongoPath = config.mongoPath,
    bodyParser = require('body-parser'),
    httpPort = process.env.PORT || config.port;

const games = require('./apis/get/games.js');
const players = require('./apis/get/players.js');
const teams = require('./apis/get/teams.js');
const leagues = require('./apis/get/leagues.js');
const register = require('./apis/post/register.js');
const login = require('./apis/post/login.js');
const logout = require('./apis/post/logout.js');
const gamePost = require('./apis/post/game.js');
const leaguePost = require('./apis/post/league.js');
const teamPost = require('./apis/post/team.js');
const playerPost = require('./apis/post/player.js');

// mongoDB init
const mongoDBFunction = () => {
    mongodb.on('error', () => {
        console.log("Error connecting to the mongo DB");
    });
    mongodb.once('open', () => {
        const m = mongoPath.substring(mongoPath.lastIndexOf('/')+1, mongoPath.length);
        console.log("Connected to mongoDB: '"+m+"'");
        httpServerFunction();
    });
    mongoose.connect(mongoPath);
}
mongoDBFunction();

//send file request
const httpServerFunction = () => {
    // static
    app.use('/', express.static((path.join(__dirname,'../dist'))));
    // REST
    app.get('/games', games.games);
    app.get('/leagues', leagues.leagues);
    app.get('/game', games.oneGame);    // ?league=superleague_gr&week=1
    app.get('/teams', teams.teams);    // ?team=AEK Athens&league=superleague_gr&country=gr
    app.get('/players', players.players);    // ?name teamId leagueId

    app.use(bodyParser.json({limit: "50mb"}));
    app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}))
    
    app.post('/register', register.register);
    app.post('/login', login.login);
    app.post('/logout', logout.logout);
    app.post('/game', gamePost.game);
    app.post('/league', leaguePost.league);
    app.post('/team', teamPost.team);
    app.post('/player', playerPost.player);
    //http listen
    http.listen(httpPort, () => {
        console.log('listening on:' + config.port);
    });
};

module.exports = app