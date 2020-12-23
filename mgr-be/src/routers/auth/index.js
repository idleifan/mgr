const Router = require('@koa/router');
const mongoose = require('mongoose');
const { getBody } = require('../../helpers/utils');
const jwt = require('jsonwebtoken');
const config = require('../../project.config');

const User = mongoose.model('User');

const router = new Router({
    prefix: '/auth'
});

router.post('/register',async (ctx) => { 
    const{
        account,
        password,
    } = getBody(ctx);

    if (account === '' || password === ''){
        ctx.body = {
            code:0,
            msg: '字段不能为空',
            data: null,
        };
        return;
    }

const one = await User.findOne({
    account,
}).exec();
if (one) {
    ctx.body = {
        code:0,
        msg: '已存在该用户名',
        data: null,
    }
    return;
}


    const user = new User({ 
        account,
        password,
    });
    const res = await user.save();
    ctx.body = {
        code:1,
        msg: '注册成功！',
        data: res,
    }
});

// router.get('/register',async (ctx) => {
//     ctx.body = {
//         code:1,
//         msg: '注册成功',
//         data: res,
//     }
   
// });
router.post('/login',async (ctx) =>{
    const{
        account,
        password,
    } = getBody(ctx);

    
    if (account === '' || password === ''){
        ctx.body = {
            code:0,
            msg: '字段不能为空',
            data: null,
        };
        return;
    }

    const one = await User.findOne({
        account,
    }).exec();

    if (!one) {
        ctx.body = {
        code: 0,
        msg: '用户名或密码错误',
        data: null,
        };

        return;
    }

    const user = {
        account: one.account,
        character: one.character,
        _id: one._id,
    };

    if (one.password === password) {
        ctx.body = {
            code: 1,
            msg: '登录成功',
            data: {
                user,
                token: jwt.sign(user,config.JWT_SECRET),
            },
            };
            return;
    }
    ctx.body = {
        code: 0,
        msg: '用户名或密码错误',
        data: null,
        };
});

module.exports = router;