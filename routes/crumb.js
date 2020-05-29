const express = require('express');
const router = express.Router();

// Import the crumb model
const Crumb = require('../models/crumb')
// Import the user model
const User = require('../models/user')

// Creating a CRUMB (user post)
router.post('/:id/newpost', (req, res, next) => {
    const title = req.body.title;
    const text = req.body.text;
    const quote = req.body.quote;
    const imgURL = req.body.imgURL;

    Crumb
        .create({
            crumbType: "Text",
            title: title,
            text: text
        })
        .then(crumb => {
            return User.findByIdAndUpdate(
                req.params.id,
                {
                    $push: {
                        crumbs: {
                            $each: [crumb._id],
                            $position: 0
                        }
                    },
                },
                { new: true }
            )
                .then(updatedUser => {
                    res.json(updatedUser);
                })
        })
})

// Getting all the user's posts
// router.get('/posts', (req, res, next) => {
//     User
//         .findById(req.user._id)
//         .populate({
//             path: 'crumbs'
//         })
//         .then(user => {
//             res.status(200).json(user);
//         })
//         .catch(err => {
//             res.status(500).json(err);
//         })
// })

module.exports = router;
