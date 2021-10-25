const mongoose = require('mongoose');

const User = mongoose.model('users', mongoose.Schema({
    name: String,
    email: String,
    password: String,
    country: String,
    alias: String,
    company: String
}));


module.exports = {
	User: User
};