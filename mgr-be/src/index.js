const koa = require('koa');
const koaBody = require('koa-body');
const { connect } = require('./db');
const registerRoutes = require('./routers');
const cors = require('koa-cors');

//const Router = require('@koa/router');

const app =new koa();

connect().then(() =>{
    app.use(cors()); 
    app.use(koaBody());
    registerRoutes(app);

   

    app.listen(3000,() => {
        console.log('启动成功');
    });
});


