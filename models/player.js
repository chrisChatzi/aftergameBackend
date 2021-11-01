const mongoose = require('mongoose');

const Player = userId => {
    return mongoose.model(`${userId}_players`, mongoose.Schema({
        playerId: {
            type: String,
            required: true
        },
        teamId: String,
        leagueId: String,
        name: String,
        number: Number,
        position: String,
        photoPath: String
    }));
}

module.exports = Player;