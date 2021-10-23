const Token = require('../models/token.js').Token;

function tokenCheck (authUser, authToken) {
    return new Promise((resolve, reject) => {
        Token.findOne({userId: authUser, token: authToken}, (err, result) => {
            if(err){
                reject({text: 'Unexpected query error'});
            }
            if(result === null) {
                reject({text: 'Unauthorized', code: 401});
            } else {
                const dateNow = new Date(new Date().toISOString());
                const dateExprired = new Date(result.expireAt);
                if(dateNow > dateExprired) {
                    reject({text: 'Token expired', code: 401});
                }
                resolve();
            }
        });
    });
}

module.exports = {
    tokenCheck
};