const mongoose = require('mongoose');
const Player = require('../../models/player.js');
const tokenCheck = require('../../helpers/tokenChecker').tokenCheck;

function player (req, res) {
    const body = req.body;
    const authUser = req.get('x-auth-user');
    const authToken = req.get('x-auth-token');
    tokenCheck(authUser, authToken)
        .then(v => {
            // Token is valid
            // Check player req.body
            if(!body.name){
                res.status(400).send('Name is missing');
                return;
            }
            if(!body.number){
                res.status(400).send('Number is missing');
                return;
            }
            if(!body.leagueId){
                res.status(400).send('LeagueId is missing');
                return;
            }
            if(!body.teamId){
                res.status(400).send('TeamId is missing');
                return;
            }
            // Check ids
            const playerId = `${body.name.toLowerCase().replace(' ', '_')}_${body.teamId}`;
            const teamId = body.teamId;
            const leagueId = body.leagueId;
            delete mongoose.connection.models[`${authUser}_players`];
            Player(authUser).find({teamId}, (err, result) => {
                if(err) {
                    res.status(400).send('Unexpected error');
                    return;
                }
                if(result && result.length > 0){
                    // Team already exists
                    res.status(400).send('Player already exists');
                    return;
                } else {
                    delete mongoose.connection.models[`${authUser}_players`];
                    // Add team
                    Player(authUser).create(
                        {
                            playerId,
                            teamId,
                            leagueId,
                            name: body.name,
                            number: body.number,
                            position: body.position,
                            photoPath: body.photoPath
                        },
                        (err) => {
                            res.status(200).send('Player added');
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
    player
};