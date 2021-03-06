const express = require('express');
const router = express.Router();
const passport = require('passport')

// Importing the User model
const User = require('../models/user');

// BCrypt to encrypt the passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

// Signup POST route
router.post("/signup", (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    if (username === "") {
        res.status(400).json({ message: "Please provide a valid username" });
        return;
    }

    if (password === "") {
        res.status(400).json({ message: "Please provide a valid password" });
        return;
    }

    User.findOne({ username })
        .then(user => {
            if (user !== null) {
                return res.status(400).json({ message: "The username already exists" });
            }
            if (password.length < 7) {
                return res.status(400).json({ message: 'Your password must be at least 7 characters long' });
            }
            const salt = bcrypt.genSaltSync(bcryptSalt);
            const hashPass = bcrypt.hashSync(password, salt);
            const newUser = new User({
                username: username,
                password: hashPass
            });
            newUser.save((err) => {
                if (err) {
                    return res.status(400).json({ message: 'Saving user to database went wrong.' });
                }
                console.log("Successful signup!")
                // Automatically log in user after sign up
                // .login() here is actually predefined passport method
                req.login(newUser, (err) => {
                    if (err) {
                        return res.status(500).json({ message: 'Login after signup went bad.' });
                    }
                    // Send the user's information to the frontend
                    // We can use also: res.status(200).json(req.user);
                    res.status(200).json(newUser);
                });

            });
        })
        .catch(error => {
            next(error)
        })
});


// Login POST route
router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, theUser, failureDetails) => {
        if (err) {
            return res.status(500).json({ message: 'Something went wrong authenticating user' });
        }
        if (!theUser) {
            // "failureDetails" contains the error messages
            return res.status(401).json(failureDetails);
        }
        // save user in session
        req.login(theUser, (err) => {
            if (err) { return res.status(500).json({ message: 'Session save went bad.' }) }
            console.log("Successful login!")
            // console.log("Logging in using this REQ data: ", req)
            // We are now logged in (that's why we can also send req.user)
            User
                .findById(req.user._id)
                .populate({
                    path: 'crumbs'
                })
                .then(user => {
                    // console.log("THEN the back send this user data: ", user)
                    res.status(200).json(user);
                })
        });
    })(req, res, next);
});

// Logout POST route
router.delete('/logout', (req, res, next) => {
    req.logout();
    res.status(200).json({ message: 'Log out success!' });
});

// Logged-in check GET route
router.get('/loggedin', (req, res, next) => {
    // req.isAuthenticated() is defined by passport
    // if (req.isAuthenticated()) {
    if (req.user) {
        User
            .findById(req.user._id)
            .populate({
                path: 'crumbs'
            })
            .then(user => {
                res.status(200).json(user);
            })
        return;
    } else {
        console.log("No user is currently logged in!")
        res.json({ message: 'Not currently logged in' });
    }
});

module.exports = router;