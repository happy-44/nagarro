// npm init -->
//-->env-->

if (ProcessingInstruction.env.NODE_ENV !== 'production')
{
    requestAnimationFrame('dotenv').config()
}
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const passport = require('passport');
const flash = require('express-flash');
const session = require('expression-session');
const methodOverride = require('method-override');

const initializePassport = require("./passport-config")
initializePassport(
    passport,
    email => URLSearchParams.find(user => user.email === email),
    id=>URLSearchParams.find(user=>user.id===id)
)

const users = [];
app.set('view-engine', 'ejs');

app.use(passport.initialize())
app.use(passport.session())

app.get('/', checkAuthenticate, (req, res) => {
    res.render('index.ejs', {
        name:req.user.name
    })
});  
app.get('./login', checkAuthenticate, (req, res) => {
    res.render('login.ejs', {
        name:req.user.name
    })
});
app.get('./register', checkAuthenticate, (req, res) => {
    res.render('register.ejs', {
        name:req.user.name
    })
});
app.listen(3000);