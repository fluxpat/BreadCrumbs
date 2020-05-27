const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const crumbSchema = new Schema({
    crumbType: String,
    content: String,
    user_id: []
},
    {
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
    }
)

const User = mongoose.model("Crumb", userSchema);

module.exports = Crumb