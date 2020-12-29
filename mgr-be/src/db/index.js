
require('./Schemas/User');
require('./Schemas/lnviteCode');
require('./Schemas/Bos');
require('./Schemas/InventoryLog');
require('./Schemas/Character'); 
require('./Schemas/Log');
require('./Schemas/FindLose');
require('./Schemas/LogResponse');




const mongoose = require('mongoose');

   //给哪个数据库的  
   //哪个集合
   //添加什么格式的文档

   //Schema 映射了MongoDB下的一个集合，并且他的内容就是集合下的文档构成
   //Modal 可以理解成是根据Schema生成的一套方法，这个方法用来操作MongoDB下的集合和集合下的文档


const connect = () => {
    return new Promise((resolve) => {
        mongoose.connect('mongodb://127.0.0.1:27017');
        //当数据库被打开的时候 做一些事情
        mongoose.connection.on('open',()=>{
            console.log('连接数据库成功');
            resolve();
        });
    });
 
};

module.exports = {
    connect,
};