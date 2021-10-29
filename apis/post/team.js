const mongoose = require('mongoose');
const Team = require('../../models/team.js');
const tokenCheck = require('../../helpers/tokenChecker').tokenCheck;

function team (req, res) {
    const body = req.body;
    const authUser = req.get('x-auth-user');
    const authToken = req.get('x-auth-token');
    tokenCheck(authUser, authToken)
        .then(v => {
            // Token is valid
            // Check team req.body
            if(!body.name){
                res.status(400).send('Name is missing');
                return;
            }
            if(!body.league && !body.leagueId){
                res.status(400).send('League or leagueId is missing');
                return;
            }
            if(!body.country){
                res.status(400).send('Country is missing');
                return;
            }
            // Check ids
            const teamId = `${body.country}_${body.name.toLowerCase().replace(' ', '_')}`;
            const leagueId = body.leagueId || `${body.league}_${body.country}`;
            delete mongoose.connection.models[`${authUser}_teams`];
            Team(authUser).find({teamId}, (err, result) => {
                if(err) {
                    res.status(400).send('Unexpected error');
                    return;
                }
                if(result && result.length > 0){
                    // Team already exists
                    res.status(400).send('Team already exists');
                    return;
                } else {
                    delete mongoose.connection.models[`${authUser}_teams`];
                    // Add team
                    Team(authUser).create(
                        {
                            teamId,
                            leagueId,
                            name: body.name,
                            league: body.league,
                            country: body.country,
                            photoPath: body.photoPath
                        },
                        (err) => {
                            res.status(200).send('Team added');
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
    team
};