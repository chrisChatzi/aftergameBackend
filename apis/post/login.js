const User = require('../../models/user.js').User;
const Token = require('../../models/token.js').Token;

const randomGenerator = require('../../helpers/index.js').randomGenerator;

function login (req, res) {
    const body = req.body;
    if(!body.name && !body.email){
        res.status(400).send('Name/email is missing');
        return;
    }
    if(!body.password){
        res.status(400).send('Password is missing');
        return;
    }
    User.findOne({name: body.name}, (err, result) => {
        if(err || result === null){
            // Check if name exists
            res.status(400).send('Name does not exist');
            return;
        } else {
            bcrypt.compare(body.password, result.password, function (err, match){
                if(err){
                    console.log('Hash error', err);
                    res.status(400).send('Unexpected error');
                    return;
                } else {
                    if(!match) {
                        res.status(400).send('Password does not match');
                        return;
                    }
                    // Update auth token collection
                    Token.deleteMany({userId: result.name}, () => {
                        Token.create({userId: result.name, token: randomGenerator(16)});
                    });
                    res.status(200).send("User logged in");
                }
            });
        };
    });
}

module.exports = {
    login
};