const mongoose = require('mongoose');
const {getMate} = require('./helpers');
 
const BosSchema = new mongoose.Schema({
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

    meta:getMate(),
});

mongoose.model('Bos',BosSchema);