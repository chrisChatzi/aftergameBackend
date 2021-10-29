const mongoose = require('mongoose');

const Team = userId => {
    return mongoose.model(`${userId}_teams`, mongoose.Schema({
        teamId: {
            type: String,
            required: true
        },
        leagueId: String,
        name: String,
        league: String,
        country: String,
        photoPath: String
    }));
}

module.exports = Team;