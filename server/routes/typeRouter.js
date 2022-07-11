const Router = require('express');
const typeController = require('../controllers/typeController');
const router = new Router();
const checkRole = require('../middleware/checkRoleMiddleware');
// указываем путь по которому тот или иной роутер будет отрабатывать

// const TypeController = require('../controllers/typeController');

router.post('/', checkRole('ADMIN') ,typeController.create); // метод для создания типа
router.get('/', typeController.getAll); // для того, чтобы все типы получать


module.exports = router;