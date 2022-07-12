import {makeAutoObservable} from 'mobx';

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильник'},
            {id: 2, name: 'Смартфоны'}
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'}
        ]
        this._devices = [
            {id: 1, name: 'IPHONE 12', price: 60000, rating: 4, img: 'https://images.unsplash.com/photo-1611791485440-24e8239a0377?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lJTIwMTIlMjBwcm98ZW58MHx8MHx8&w=1000&q=80'},
            {id: 2, name: 'IPHONE 12', price: 60000, rating: 4, img: 'https://images.unsplash.com/photo-1611791485440-24e8239a0377?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lJTIwMTIlMjBwcm98ZW58MHx8MHx8&w=1000&q=80'},
            {id: 3, name: 'IPHONE 12', price: 60000, rating: 4, img: 'https://images.unsplash.com/photo-1611791485440-24e8239a0377?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lJTIwMTIlMjBwcm98ZW58MHx8MHx8&w=1000&q=80'},
            {id: 4, name: 'IPHONE 12', price: 60000, rating: 4, img: 'https://images.unsplash.com/photo-1611791485440-24e8239a0377?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lJTIwMTIlMjBwcm98ZW58MHx8MHx8&w=1000&q=80'}
        ]
        makeAutoObservable(this); // теперь mobx будет следить за изменениями нашего конструктора
    }
    
    setTypes(types) {
        this._types = types
    }

    setBrands(brands){ // действие для изменения пользователя 
        this._brands = brands;
    }
    setDevices(devices){ // действие для изменения пользователя 
        this._devices = devices;
    }
    // вызывается только в случае, когда переменная, которая используется внутри была изменена
    get types() { // для получения переменных из нашего состояния
        return this._types;
    }

    get brands() { // для получения переменных из нашего состояния
        return this._brands;
    }
    get devices() { // для получения переменных из нашего состояния
        return this._devices;
    }
}