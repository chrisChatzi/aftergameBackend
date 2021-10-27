const mongoose = require('mongoose');

const League = userId => {
    return mongoose.model(`${userId}_leagues`, mongoose.Schema({
        leagueId: String,
        name: String,
        country: String
    }));
}


module.exports = League;