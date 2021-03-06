const mongoose = require('mongoose');

const League = userId => {
    return mongoose.model(`${userId}_leagues`, mongoose.Schema({
        leagueId: {
            type: String,
            required: true
        },
        name: String,
        country: String,
        photoPath: String
    }));
}


module.exports = League;