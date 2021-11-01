const mongoose = require('mongoose');
const Player = require('../../models/player.js');
const userCheck = require('../../helpers/userChecker').userCheck;

function players (req, res) {
    // Check if there is a query
    const query = req.query;
    const searchQuery = {};
    if(query && query.name) searchQuery.name = query.name;
    if(query && query.playerId) searchQuery.playerId = query.playerId;
    if(query && query.teamId) searchQuery.teamId = query.teamId;
    if(query && query.leagueId) searchQuery.leagueId = query.leagueId;
    // Auth
    const authUser = req.get('x-auth-user');
    const authCompany = req.get('x-auth-company');
    const authAlias = req.get('x-auth-alias');
    delete mongoose.connection.models[`${authUser}_players`];
    userCheck(authUser, authCompany, authAlias)
        .then(v => {
            // Check if user's teams collection exists
            Player(authUser).find(searchQuery, (err, result) => {
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

module.exports = {
    players
};