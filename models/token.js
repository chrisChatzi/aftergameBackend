const mongoose = require('mongoose');
const expireTime = require('../helpers/consts.js').expireTime;

const Token = mongoose.model('tokens', mongoose.Schema({
    userId: String,
    token: String,
    expireAt: {
        type: Date,
        default: new Date(Date.now() + expireTime),
        index: { expires: expireTime }
    }
}));

module.exports = {
	Token
};