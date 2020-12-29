const mongoose = require('mongoose');
const {getMate,preSave} = require('./helpers');
 
const LogResponseSchema = new mongoose.Schema({
    logId: String,
    data: String,

    meta:getMate(),
});

LogResponseSchema.pre('save',preSave);

mongoose.model('LogResponse',LogResponseSchema);