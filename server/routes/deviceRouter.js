const Router = require('express');
const deviceController = require('../controllers/deviceController');
const router = new Router();
const checkRole = require('../middleware/checkRoleMiddleware');
// указываем путь по которому тот или иной роутер будет отрабатывать

router.post('/',  checkRole('ADMIN'), deviceController.create);
router.get('/', deviceController.getAll); 
router.get('/:id', deviceController.getOne); // для получения конкретно взятого девайса


module.exports = router;