const mongoose = require('mongoose');

const User = mongoose.model('users', mongoose.Schema({
    name: String,
    email: String,
    password: String,
    country: String,
}));


module.exports = {
	User: User
};