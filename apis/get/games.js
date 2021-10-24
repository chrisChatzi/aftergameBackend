const mongoose = require('mongoose');
const Game = require('../../models/game.js');
const tokenCheck = require('../../helpers/tokenChecker').tokenCheck;

function games (req, res) {
    const authUser = req.get('x-auth-user');
    const authToken = req.get('x-auth-token');
    tokenCheck(authUser, authToken)
        .then(v => {
            // Check if user's games collection exists
            Game(authUser).find({}, (err, result) => {
                if(err){
                    res.status(400).send('Unexpected error');
                    return;
                }
                res.status(200).send(result);
            });
        })
        .catch((error) => {
            res.status(error.code || 400).send(error.text);
        })
}

function oneGame (req, res) {
    const authUser = req.get('x-auth-user');
    const authToken = req.get('x-auth-token');
    const league = req.query.league;
    const week = req.query.week;
    if(!league){
        res.status(400).send('League is missing');
        return;
    }
    if(!week){
        res.status(400).send('Week is missing');
        return;
    }
    delete mongoose.connection.models[`${authUser}_games`];
    tokenCheck(authUser, authToken)
        .then(v => {
            // Check if user's games collection exists
            Game(authUser).find({league, week}, (err, result) => {
                if(err){
                    res.status(400).send('Unexpected error');
                    return;
                }
                if(!result || result.length === 0){
                    res.status(400).send('Game does not exist');
                    return;
                }
                const dataToSend = {
                    teams: result[0].teams,
                    data: result[0].gameData
                };
                res.status(200).send(dataToSend);
            });
        })
        .catch((error) => {
            res.status(error.code || 400).send(error.text);
        })
}

module.exports = {
    games,
    oneGame
};