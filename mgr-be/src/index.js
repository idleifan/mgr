const koa = require('koa');

const app =new koa();

app.listen(3000,() => {
    console.log('启动成功');
});

console.log('112233')