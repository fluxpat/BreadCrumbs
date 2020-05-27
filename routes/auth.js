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
                res.status(400).json({ message: "The username already exists" });
                return;
            }

            if (password.length < 7) {
                res.status(400).json({ message: 'Your password must be at least 7 characters long' });
                return;
            }

            const salt = bcrypt.genSaltSync(bcryptSalt);
            const hashPass = bcrypt.hashSync(password, salt);

            const newUser = new User({
                username: username,
                password: hashPass
            });

            newUser.save((err) => {
                if (err) {
                    res.status(400).json({ message: 'Saving user to database went wrong.' });
                    return
                }

                // Automatically log in user after sign up
                // .login() here is actually predefined passport method
                req.login(newUser, (err) => {
                    if (err) {
                        res.status(500).json({ message: 'Login after signup went bad.' });
                        return;
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
            res.status(500).json({ message: 'Something went wrong authenticating user' });
            return;
        }

        if (!theUser) {
            // "failureDetails" contains the error messages
            // from our logic in "LocalStrategy" { message: '...' }.
            res.status(401).json(failureDetails);
            return;
        }

        // save user in session
        req.login(theUser, (err) => {
            if (err) {
                res.status(500).json({ message: 'Session save went bad.' });
                return;
            }

            // We are now logged in (that's why we can also send req.user)
            res.status(200).json(theUser);
        });
    })(req, res, next);
});

// Logout POST route
router.delete('/logout', (req, res, next) => {
    // req.logout() is defined by passport
    req.logout();
    res.status(200).json({ message: 'Log out success!' });
});

// Logged-in check GET route
router.get('/loggedin', (req, res, next) => {
    // req.isAuthenticated() is defined by passport
    // if (req.isAuthenticated()) {
    if (req.user) {
        console.log("You are currently logged in!")
        res.status(200).json(req.user);
        return;
    } else {
        console.log("No user is currently logged in!")
        res.json({ message: 'Not currently logged in' });
    }
});

module.exports = router;