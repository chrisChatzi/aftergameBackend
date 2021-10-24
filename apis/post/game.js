const mongoose = require('mongoose');
const Game = require('../../models/game.js');
const tokenCheck = require('../../helpers/tokenChecker').tokenCheck;

function game (req, res) {
    const body = req.body;
    const authUser = req.get('x-auth-user');
    const authToken = req.get('x-auth-token');
    tokenCheck(authUser, authToken)
        .then(v => {
            // Token is valid
            // Check game req.body
            if(!body.league){
                res.status(400).send('League is missing');
                return;
            }
            if(!body.week){
                res.status(400).send('Week is missing');
                return;
            }
            if(!body.teams || !Array.isArray(body.teams) || body.teams.length !== 2){
                res.status(400).send('Teams array is missing');
                return;
            }
            if(!body.gameData){
                res.status(400).send('gameData is missing');
                return;
            }
            if(body.gameData){
                let data = body.gameData;
                let error = '';
                if(!data.team || Object.keys(data.team).length === 0) error = 'gameData.team is invalid';
                if(!data.teamStats || Object.keys(data.teamStats).length === 0) error = 'gameData.teamStats is invalid';
                if(!data.opponent || Object.keys(data.opponent).length === 0) error = 'gameData.opponent is invalid';
                if(!data.opponentStats || Object.keys(data.opponentStats).length === 0) error = 'gameData.opponentStats is invalid';
                if(!data.coach || Object.keys(data.coach).length === 0) error = 'gameData.coach is invalid';
                if(!data.coachStats || Object.keys(data.coachStats).length === 0) error = 'gameData.coachStats is invalid';
                if(!data.mvp) error = 'gameData.mvp is invalid';
                if(!data.subs) error = 'gameData.subs is invalid';
                if(!data.players || data.players.length < 11) error = 'gameData.players is invalid';
                if(error && error.length > 0) {
                    res.status(400).send(error);
                    return;
                }
            }
            // Check gameId
            const gameId = `${body.league}_${body.week}_${body.teams.join('-')}`;
            delete mongoose.connection.models[`${authUser}_games`];
            Game(authUser).find({gameId}, (err, result) => {
                if(err) {
                    res.status(400).send('Unexpected error');
                    return;
                }
                if(result && result.length > 0){
                    // Game already exists
                    res.status(400).send('Game already exists');
                    return;
                } else {
                    delete mongoose.connection.models[`${authUser}_games`];
                    // Add game
                    Game(authUser).create(
                        {
                            gameId,
                            league: body.league,
                            week: body.week,
                            teams: body.teams,
                            gameData: body.gameData
                        },
                        (err) => {
                            res.status(200).send('Game added');
                            return;
                        }
                    );
                }
            });
        })
        .catch((error) => {
            res.status(error.code || 400).send(error.text);
        })
}

module.exports = {
    game
};