const Router = require('@koa/router');
const mongoose = require('mongoose');
const {getBody} = require('../../helpers/utils');

const Bos = mongoose.model('Bos');
const InventoryLog = mongoose.model('InventoryLog');

const findBosOne = async (id) => {
    const one = await Bos.findOne({
        _id: id, 
    }).exec();

    return one;
};



const router = new Router({
    prefix: '/bos'
});

router.post('/add', async (ctx) => { 
   const {
      name,
      price,
      author,
      publishDate,
      classify,
   } = getBody(ctx);
   console.log('ctx', ctx)
   const bos = new Bos({
    name,
    price,
    author,
    publishDate,
    classify,
   });

   const res = await bos.save();
//    const log = new InventoryLog({
//    // num: Math.abs(num),
//     type,
//    });

   //log.save();
   ctx.body = {
       data: res,
       code: 1,
       msg: '添加成功',
   };
});

router.get('/list',async (ctx) => {

    const {
        page = 1,
        key = '',
    }= ctx.query;
    
    let = {
        size = 10,
    } =ctx.query;

    size = Number(size);

    const query = {};

    if (key) {
        query.name = key;
    }

   const list = await Bos
   .find(query)
    .sort({
        _id:-1,
    })
   .skip((page - 1) * size)
   .limit(size)
   .exec();

   const total = await Bos.countDocuments();

   ctx.body = {
    data: {
        total,
        list,
        page,
        size,
    },
    code: 1,
    msg: '获取列表成功',
};
});


router.delete('/:id', async (ctx) => {
  const {
      id,
  } = ctx.params;

  const delMsg = await Bos.deleteOne({
      _id: id,
  });

  ctx.body = {
      data: delMsg,
      msg: '删除成功',
      code: 1,
  };
});

router.post('/update',async (ctx) => {
    const {
        id,
        type,
        // name,
        // price,
        // author,
        // publishDate,
        // classify,
        ...others
    } = ctx.request.body;

    const one = await findBosOne(id);

    //没有找到失物
    if (!one) {
        ctx.body = {
            msg: '没有找到失物',
            code: 0,
        }
        return;
    }

    const newQuery = {};
    Object.entries(others).forEach(([key,value]) => {
        if (value) {
            newQuery[key] = value;
        }
    });

    Object.assign(one, newQuery);

    const res = await one.save();

    ctx.body = {
        data: res,
        code: 1,
        msg: '保存成功',
    }

});

router.get('/detail/:id',async(ctx) => {
    const {
        id,
    } = ctx.params;

    const one = await findBosOne(id);

    //没有找到失物
    if (!one) {
        ctx.body = {
            msg: '没有找到失物',
            code: 0,
        };
        return;
    }
    ctx.body = {
        msg: '查询成功',
        data: one,
        code: 1,
    }
});

module.exports = router;