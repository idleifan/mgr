const mongoose = require('mongoose');
const {getMate,preSave} = require('./helpers');
 
const FindLoseSchema = new mongoose.Schema({
    //报失物品
    name: String,
    //报失地点
    price:String,
    //报失人
    author: String,
    //报失时间
    publishDate :String,
    //分类
    classify: String,

    account: String,

    feature: String, // 特征
    handDate: String, // 上交时间
    authorPhoneNum: String, // 失主联系方式

    meta:getMate(),
});

FindLoseSchema.pre('save',preSave);

mongoose.model('FindLose',FindLoseSchema);