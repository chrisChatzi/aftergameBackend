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

module.exports = {
    games
};