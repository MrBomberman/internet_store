class ApiError extends Error {
    constructor(status, message){
        super(); // вызываем родительский конструктор
        this.status = status;
        this.message = message;
    }
    // статические функции -  это функции, которые можно вызывать без создания объекта\
    // то есть можно обращаться напрямую к классу и вызывать ту или иную функцию
    static badRequest(message) {
        return new ApiError(404, message);
    }

    static internal(message){
        return new ApiError(500, message);
    }

    static forbiden(message){
        return new ApiError(403, message);
    }
}

module.exports = ApiError;