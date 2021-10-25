const User = require('../models/user.js').User;

function userCheck (authUser, authCompany, authAlias) {
    return new Promise((resolve, reject) => {
        User.findOne({userId: authUser, company: authCompany, alias: authAlias}, (err, result) => {
            if(err){
                reject({text: 'Unexpected query error'});
            }
            if(result === null) {
                reject({text: 'Unauthorized', code: 401});
            } else {
                resolve();
            }
        });
    });
}

module.exports = {
    userCheck
};