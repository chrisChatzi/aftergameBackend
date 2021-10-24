const mongoose = require('mongoose');

const Game = userId => {
    return mongoose.model(`${userId}_games`, mongoose.Schema({
        gameId: String,
        league: String,
        week: Number,
        teams: Array,
        gameData: Object
    }));
}


module.exports = Game;