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
                        crumbs: crumb._id,
                    },
                },
                { new: true }
            )
        })
}

)

module.exports = router;
