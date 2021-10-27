const mongoose = require('mongoose');
const League = require('../../models/league.js');
const tokenCheck = require('../../helpers/tokenChecker').tokenCheck;

function league (req, res) {
    const body = req.body;
    const authUser = req.get('x-auth-user');
    const authToken = req.get('x-auth-token');
    tokenCheck(authUser, authToken)
        .then(v => {
            // Token is valid
            // Check league req.body
            if(!body.name){
                res.status(400).send('Name is missing');
                return;
            }
            if(!body.country){
                res.status(400).send('Country is missing');
                return;
            }
            // Check leagueId
            const leagueId = `${body.name.toLowerCase().replace(' ', '_')}_${body.country}`;
            delete mongoose.connection.models[`${authUser}_leagues`];
            League(authUser).find({leagueId}, (err, result) => {
                if(err) {
                    res.status(400).send('Unexpected error');
                    return;
                }
                if(result && result.length > 0){
                    // League already exists
                    res.status(400).send('League already exists');
                    return;
                } else {
                    delete mongoose.connection.models[`${authUser}_leagues`];
                    // Add league
                    League(authUser).create(
                        {
                            leagueId,
                            name: body.name,
                            country: body.country
                        },
                        (err) => {
                            res.status(200).send('League added');
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
    league
};