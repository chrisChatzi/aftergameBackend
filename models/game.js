const mongoose = require('mongoose');

const Game = userId => {
    mongoose.model(`${userId}_games`, mongoose.Schema({
        league: String,
        week: String,
        team: String,
        data: Object
    }));
}


module.exports = Game;