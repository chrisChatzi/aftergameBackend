const Token = require('../../models/token.js').Token;

function logout (req, res) {
    const body = req.body;
    if(!body.name && !body.email){
        res.status(400).send('Name is missing');
        return;
    }
    Token.deleteMany({userId: body.name}, () => {});
    res.status(200).send("User logged out");
}

module.exports = {
    logout
};