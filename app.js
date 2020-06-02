require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose')
const flash = require('connect-flash');
const cors = require('cors')

// Passport Setup
const session = require('express-session');
const passport = require('passport');
require('./configs/passport');
const MongoStore = require('connect-mongo')(session);
// const app_name = require('./package.json').name;

// Connecting to MongoDB
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost/BreadCrumbs', { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


const app = express();

// Middleware setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    // cookie: { maxAge: 60000 },
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);
app.use(flash());

// Use passport.initialize() and passport.session()
app.use(passport.initialize());
app.use(passport.session());

// Use CORS to allow interaction between front-end and back-end
app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000']
}));

// Routes middlewares go here
const auth = require('./routes/auth')
app.use('/api/auth', auth)
const crumb = require('./routes/crumb')
app.use('/api/crumb', crumb)

app.use((req, res) => {
  // If no routes match, send them the React HTML.
  res.sendFile(__dirname + "/client/build/index.html");
});

module.exports = app;
