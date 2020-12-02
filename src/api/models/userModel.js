'use strict'

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const uniqueValidator = require('mongoose-unique-validator')

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fullName: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true

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
UserSchema.plugin(uniqueValidator)
UserSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.hash_password)
}

module.exports = mongoose.model("User", UserSchema);