const Router = require('express');
const deviceController = require('../controllers/deviceController');
const router = new Router();
// указываем путь по которому тот или иной роутер будет отрабатывать

router.post('/', deviceController.create);
router.get('/', deviceController.getAll); 
router.get('/:id', deviceController.getOne); // для получения конкретно взятого девайса


module.exports = router;