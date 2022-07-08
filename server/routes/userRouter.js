const Router = require('express');
const userController = require('../controllers/userController');
const router = new Router();
// указываем путь по которому тот или иной роутер будет отрабатывать

router.post('/registration', userController.registration); 
router.post('/login', userController.login); 
router.get('/auth', userController.check)

module.exports = router;