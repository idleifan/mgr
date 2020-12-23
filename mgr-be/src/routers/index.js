const auth = require('./auth/index');
const bos = require('./Bos');
const inventoryLog = require('./inventory-log/index');
const user = require('./user');
const character = require('./character');
const log = require('./log');


module.exports = (app) => {
    app.use(auth.routes());
    app.use(bos.routes());
    app.use(character.routes());
    app.use(user.routes());
    app.use(inventoryLog.routes());
    app.use(log.routes());

};
