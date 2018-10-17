const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const _schema = {
    name: String,
    starSign: String,
    birthdate: String
}

const userSchema = new Schema(_schema)
module.exports = mongoose.model("users", userSchema)