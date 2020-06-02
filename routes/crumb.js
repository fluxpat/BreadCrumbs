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
            User.findByIdAndUpdate(
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
                .populate({
                    path: 'crumbs'
                })
                .then(updatedUser => {
                    res.json(updatedUser);
                })
        })
})

// Deleting a user's post
router.post('/deletePost', (req, res, next) => {
    Crumb.findOneAndDelete({ _id: req.body.postId })
        .then(crumb => {
            User
                .findByIdAndUpdate(
                    req.user._id,
                    {
                        $pull: { crumbs: req.body.postId },
                    },
                    { new: true }
                )
                .populate({
                    path: 'crumbs'
                })
                .then(user => {
                    res.status(200).json(user);
                })
                .catch(err => {
                    res.status(500).json(err);
                })
        })

})

module.exports = router;
