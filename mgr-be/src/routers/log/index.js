const Router = require('@koa/router');
const mongoose = require('mongoose');
// const { getBody } = require('../../helpers/utils');
// const jwt = require('jsonwebtoken');

const Log = mongoose.model('Log');

const router = new Router({
    prefix: '/log',
});

router.get('list',async (ctx) => {
    console.log('list1111')
    let {
        page,
        size,
    } = ctx.query;

    page = Number(page);
    size = Number(size);

    const list = await Log
      .find()
      .skip((page -1) * size)
      .limit(size)
      .exec();
    console.log('list', list)
      const total = await Log.countDocuments().exec();

    ctx.body = {
        data: {
            list,
            page,
            size,
            total,
        },
        code: 1,
        msg: '获取列表成功',
    };
});

module.exports = router;