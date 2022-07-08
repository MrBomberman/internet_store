// это главный файл роутера
const Router = require('express');
const router = new Router();
const deviceRouter = require('./deviceRouter');
const brandRouter = require('./brandRouter');
const typeRouter = require('./typeRouter');
const userRouter = require('./userRouter')

// указываем путь по которому тот или иной роутер будет отрабатывать
router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/brand', brandRouter);
router.use('/device', deviceRouter);


module.exports = router;
