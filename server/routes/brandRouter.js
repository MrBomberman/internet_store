const Router = require('express');
const brandController = require('../controllers/brandController');
const router = new Router();
const checkRole = require('../middleware/checkRoleMiddleware');
// указываем путь по которому тот или иной роутер будет отрабатывать

router.post('/', checkRole('ADMIN'), brandController.create); // метод для создания бренда
router.get('/', brandController.getAll); // для того, чтобы все боренды получать


module.exports = router;