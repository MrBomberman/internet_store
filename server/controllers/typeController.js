const {Type} = require('../models/models');

const ApiError = require('../error/ApiError');

class TypeController {
    // добавление типа в бд
    async create(req, res) {
        const {name} = req.body;
        const type = await Type.create({name})
        return res.json(type)
    }

    async getAll(req, res) {
        const types = await Type.findAll(); // вернет все записи из бд
        return res.json(types);
    }

    async getOne(req, res) {

    }

}

module.exports = new TypeController();