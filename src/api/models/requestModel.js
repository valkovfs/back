'use strict';
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    number: {
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        required:true
    },
    createdOn: {
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model("requestModel", RequestSchema);