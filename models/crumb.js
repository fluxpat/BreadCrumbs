const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const crumbSchema = new Schema({
    crumbType: { type: String, enum: ['Text', 'Quote', 'Photo'] },
    title: String,
    text: String,
    quote: String,
    imageURL: String,
    likes: Number,
    dislikes: Number,
    comments: [{
        comment: String,
        date: Date
    }],
    user: { type: Schema.Types.ObjectId, ref: 'User' }
},
    {
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
    }
)

const Crumb = mongoose.model("Crumb", crumbSchema);

module.exports = Crumb