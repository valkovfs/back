'use strict';
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img: {
        type: String,
    },
    pageLink: {
        type: String
    },
    sourceLink: {
        type: String
    },
    technologies: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("projects", projectSchema);