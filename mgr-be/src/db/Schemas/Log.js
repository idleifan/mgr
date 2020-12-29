const mongoose = require('mongoose');
const {getMate,preSave} = require('./helpers');
 
const LogSchema = new mongoose.Schema({
    user: {
        account: String,
        id: String,
    },

    require: {
        method: String,
        url: String,
        status: Number,
    },

    startTime: Number,
    endTime: Number,

    meta:getMate(),
});

LogSchema.pre('save',preSave);

mongoose.model('Log',LogSchema);