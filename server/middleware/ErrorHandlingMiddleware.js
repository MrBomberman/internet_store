const ApiError = require('../error/ApiError');

// при помощи next передаем урпавление следующему в цепочке middleware
module.exports = function(err, req, res, next){
    if(err instanceof ApiError){
        return res.status(err.status).json({message: err.message})
    }

    return res.status(500).json({message: 'Непредвиденная ошибка'})
}