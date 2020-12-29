const Router = require('@koa/router');
const mongoose = require('mongoose');
// const { getBody } = require('../../helpers/utils');
// const jwt = require('jsonwebtoken');

const Log = mongoose.model('Log');

const router = new Router({
    prefix: '/log',
});

router.get('/list',async (ctx) => {
    let {
        page,
        size,
    } = ctx.query;

    page = Number(page);
    size = Number(size);
    const list = await Log
      .find()
      .sort({
          _id: -1,
      })
      .skip((page -1) * size)
      .limit(size)
      .exec();

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

router.post('/delete',async(ctx) =>{
    const {
        id,
    } =ctx.request.body;

    const res = await Log.deleteOne({
        _id: id,
    });

    ctx.body = {
        code:1,
        msg: '删除成功',
        data: res,
    };
});

module.exports = router;