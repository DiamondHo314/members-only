const express = require('express');
const app = express();
const session = require('express-session')
const passport = require('./config/passport')


const registerRouter = require('./routes/registerRouter');
const indexRouter = require('./routes/indexRouter');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.session())

app.use('/register', registerRouter)
app.use('/', indexRouter)

app.listen(8080, () => {
    console.log('Server is running on port 8080');
}
);

