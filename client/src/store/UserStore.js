import {makeAutoObservable} from 'mobx';

export default class UserStore {
    constructor() {
        this._isAuth = true; // 
        this._user = {};
        makeAutoObservable(this); // теперь mobx будет следить за изменениями нашего конструктора
    }
    
    setIsAuth(bool) {
        this._isAuth = bool
    }

    setUser(user){ // действие для изменения пользователя 
        this._user = user;
    }
    // вызывается только в случае, когда переменная, которая используется внутри была изменена
    get isAuth() { // для получения переменных из нашего состояния
        return this._isAuth;
    }

    get user() { // для получения переменных из нашего состояния
        return this._user;
    }
}