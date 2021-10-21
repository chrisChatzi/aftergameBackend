const User = require('../../models/user.js').User;

function register(req, res){
    const body = req.body;
    if(!body.name){
        res.status(400).send('Name is missing');
        return;
    }
    if(!body.email){
        res.status(400).send('Email is missing');
        return;
    }
    if(!body.country){
        res.status(400).send('Country is missing');
        return;
    }
    if(!body.password){
        res.status(400).send('Password is missing');
        return;
    }
    User.findOne({name: body.name}, (err, result) => {
        if(result){
            // Check if name exists
            res.status(400).send('Name already exists');
            return;
        } else {
            // Encrypt password
            bcrypt.hash(body.password, null, null, (err, hash) => {
                if(err){
                    console.log('Hash error', err);
                    res.status(400).send('Unexpected error');
                    return;
                }
                // Add user
                User.create(
                    {
                        name: body.name,
                        email: body.email,
                        password: hash,
                        country: body.country
                    },
                    () => {
                        res.status(200).send('User created');
                        return;
                    }
                );
            });
        }
    });
};

module.exports = {
    register
};