const {DataTypes} = require('sequelize');
const db = require('../db/MYSQL');

const User = db.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    username: {
        type:DataTypes.STRING,
        allowNull: false
    },
    password: {
        type:DataTypes.STRING,
        allowNull: false
    }
}, {

})
