const Token = require('../../models/token.js').Token;
const Game = require('../../models/game.js');
const mongoose = require('mongoose');

function games (req, res) {
    const authUser = req.get('x-auth-user');
    const authToken = req.get('x-auth-token');
    Token.findOne({userId: authUser, token: authToken}, (err, result) => {
        if(err){
            res.status(400).send('Unexpected error');
            return;
        }
        if(result === null) {
            res.status(401).send('Unauthorized');
            return;
        } else {
            const dateNow = new Date(new Date().toISOString());
            const dateExprired = new Date(result.expireAt);
            if(dateNow > dateExprired) {
                res.status(401).send('Token expired');
                return;
            }
            // Check if user's games collection exists
            Game(authUser).find({}, (err, result) => {
                if(err){
                    res.status(400).send('Unexpected error');
                    return;
                }
                res.status(200).send(result);
            });
        }
    });
}

module.exports = {
    games
};