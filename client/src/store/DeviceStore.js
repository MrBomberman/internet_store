import {makeAutoObservable} from 'mobx';

export default class DeviceStore {
    constructor() {
        this._types = []
        this._brands = []
        this._devices = []
        this._selectedType = {};
        this._selectedBrand = {};
        this._page = 1;
        this._totalCount = 0; // отвечает за кол-во товаров , которые доступны по тому или иному запросу
        this._limit = 3;// кол-во товаров на одному странице
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
    // при нажатии на какой-то конкретный тип, нам надо будет его выделять
    setSelectedType(type){
        this.setPage(1)
        this._selectedType = type;
    }
    setSelectedBrand(brand){
        this.setPage(1)
        this._selectedBrand = brand;
    }

    setPage(page) {
        this._page = page;
    }

    setTotalCount(totalCount){
        this._totalCount = totalCount
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

    get selectedType() {
        return this._selectedType;
    }
    
    get selectedBrand(){
        return this._selectedBrand;
    }

    get totalCount(){
        return this._totalCount
    }
    get page(){
        return this._page
    }
    get limit(){
        return this._limit
    }
}