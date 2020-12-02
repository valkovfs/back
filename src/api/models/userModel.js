'use strict'

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fullName: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        required: true,
    },
    hash_password: {
        type: String,
        required: true,
    },
    createdOn: {
        type: Date,
        default: Date.now,
    }
})

UserSchema.method.comparePassword = async function(password) {
    return await  bcrypt.compareSync(password, this.hash_password)
}

module.exports = mongoose.model("User", UserSchema);