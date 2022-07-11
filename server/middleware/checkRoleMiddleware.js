const jwt = require('jsonwebtoken');

module.exports = (role) => {
    return function (req, res, next) {
    if(req.method === 'OPTIONS'){
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1]; // достаем именно токен
        if(!token) {
            return res.status(401).json({message: "Not authorized"});
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        if(decoded.role !== role){ // если роли не совпадают - нет прав доступа
            return res.status(403).json({message: 'Not access 403!'})
        }
        req.user = decoded;
        next()
    } catch(e){
        res.status(401).json({message: "Not authorized"})
    }
}
}