// npm i 
const bcrypt = require('bcrypt');

const e = require('express');
function initialize(passport, getUserByEmail, getUserById)
{
    const authenticateUse = async (email, password, done) =>
    {
        const user = getUserByEmail(email);
        if (user == null)
        {
            return done(null, false, {message:'no user found'})
        }
        
        try{
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user);
            }
            else {
                return done(null, false, {message:'password incrrct'});
            }
        }
        catch(e)
        {
            return done(e)
        }
    }
        passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser))
        passport.serializeUser((user, done)=> done9null, user.id);
        passport.deserializeUser((user, done)=> done9null, user.id);

    // exports
}