
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    type_user: {
        type: Number,
        default:1
    },
    gender: {
        type: Number
    }
});

const user = mongoose.model('users',userSchema);

module.exports = user;