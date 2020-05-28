const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const crumbSchema = new Schema({
    crumbType: String,
    content: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
},
    {
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
    }
)

const Crumb = mongoose.model("Crumb", crumbSchema);

module.exports = Crumb