const mongoose = require('mongoose');
const {getMate,preSave} = require('./helpers');
 
const characterSchema = new mongoose.Schema({
    name: String,  // member admin
    title: String,  //成员  管理员
    power: Object,

    meta:getMate(),
});

characterSchema.pre('save',preSave);

mongoose.model('Character',characterSchema);