const mongoose = require('mongoose');
const Team = require('../../models/team.js');
const userCheck = require('../../helpers/userChecker').userCheck;

function teams (req, res) {
    // Check if there is a query
    const query = req.query;
    const searchQuery = {};
    if(query && query.team) searchQuery.name = query.team;
    if(query && query.league) searchQuery.league = query.league;
    // Auth
    const authUser = req.get('x-auth-user');
    const authCompany = req.get('x-auth-company');
    const authAlias = req.get('x-auth-alias');
    delete mongoose.connection.models[`${authUser}_teams`];
    userCheck(authUser, authCompany, authAlias)
        .then(v => {
            // Check if user's teams collection exists
            Team(authUser).find(searchQuery, (err, result) => {
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
    teams
};