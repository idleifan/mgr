const mongoose = require('mongoose');
const { connect } = require('../src/db/index');
const character = require('../src/helpers/character');

const { defaultCharacters } = character;

const Character = mongoose.model('Character');

connect()
    .then(async () => {
        console.log('开始初始化 角色 集合');
        Character.insertMany(defaultCharacters);
        console.log('角色初始化完成');
    });