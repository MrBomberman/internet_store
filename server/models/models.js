// файл для описания моделей данных

const sequelize = require('../db');

const {DataTypes} = require('sequelize');

// model of user

const User = sequelize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, // автоинкрементироваться - увеличиваться каждый раз на 1
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'}
})

// model of basket

const Basket = sequelize.define('basket',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, // автоинкрементироваться - увеличиваться каждый раз на 1
})

// model of basket device

const BasketDevice = sequelize.define('basket_device',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, // автоинкрементироваться - увеличиваться каждый раз на 1
})

// model of device

const Device = sequelize.define('device',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, // автоинкрементироваться - увеличиваться каждый раз на 1
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false}
})

// model of type 

const Type = sequelize.define('type',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, // автоинкрементироваться - увеличиваться каждый раз на 1
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

// model of brand

const Brand = sequelize.define('brand',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, // автоинкрементироваться - увеличиваться каждый раз на 1
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

// model of rating 

const Rating = sequelize.define('rating',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, // автоинкрементироваться - увеличиваться каждый раз на 1
    rate: {type: DataTypes.INTEGER, allowNull: false}
})

// model of deviceInfo

const DeviceInfo = sequelize.define('device_info',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, // автоинкрементироваться - увеличиваться каждый раз на 1
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

const TypeBrand = sequelize.define('type_brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, // автоинкрементироваться - увеличиваться каждый раз на 1
})

// связь юзера и корзины один к одному

User.hasOne(Basket);
// сообщаем, что корзина принадлежит пользователю
Basket.belongsTo(User);

// один пользователь может иметь несколько оценок

User.hasMany(Rating);

// 

Rating.belongsTo(User);

Basket.hasMany(BasketDevice);

BasketDevice.belongsTo(Basket);

Type.hasMany(Device);
Device.belongsTo(Type);

Brand.hasMany(Device);
Device.belongsTo(Brand);

Device.hasMany(Rating);
Rating.belongsTo(Device);

Device.hasMany(BasketDevice);
BasketDevice.belongsTo(Device);

// у девайса одна запись в базе данных содержит много записей с характеристиками
Device.hasMany(DeviceInfo, {as: 'info'}); 
DeviceInfo.belongsTo(Device);

// один тип односится к нескольким брендам
Type.belongsToMany(Brand, {through: TypeBrand});

// у одного бренда есть несколько типов
Brand.belongsToMany(Type, {through: TypeBrand});

module.exports = {
    User, 
    Basket, 
    BasketDevice,
    Device,
    Type,
    Brand, 
    Rating, 
    TypeBrand,
    DeviceInfo
}