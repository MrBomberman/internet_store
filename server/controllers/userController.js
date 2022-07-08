// создаем для каждого роутера отдельный контроллер
const ApiError = require('../error/ApiError');
class UserController {
    async registration(req, res) {

    }

    async login(req, res) {
        
    }

    async check(req, res, next) {
        const {id} = req.query; // можно получать параметры из урла запроса
        if(!id) {
            return next(ApiError.badRequest('NO ID'))
        }
        res.json(id)
    }
}

module.exports = new UserController()