require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();

// Passport Setup
const session = require('express-session');
const passport = require('passport');
require('./configs/passport');

// Session settings for Passport
app.use(session({
  secret: "some secret goes here",
  resave: true,
  saveUninitialized: true
}));

// Use passport.initialize() and passport.session()
app.use(passport.initialize());
app.use(passport.session());

// Connecting to MongoDB
mongoose
  .connect('mongodb://localhost/BreadCrumbs', { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Use CORS to allow interaction between front-end and back-end
app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000']
}));

// Routes middlewares go here
const auth = require('./routes/auth')
app.use('/api/auth', auth)

module.exports = app;
