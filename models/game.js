const mongoose = require('mongoose');

const Game = userId => {
    return mongoose.model(`${userId}_games`, mongoose.Schema({
        league: String,
        week: Number,
        team: String,
        data: Object
    }));
}


module.exports = Game;