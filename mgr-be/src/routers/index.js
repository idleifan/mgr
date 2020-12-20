const auth = require('./auth/index');
const bos = require('./Bos');
const user = require('./user');

module.exports = (app) => {
    app.use(auth.routes());
    app.use(bos.routes());
    app.use(user.routes());
};
