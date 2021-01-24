const {DataTypes} = require('sequelize');
const db = require('../db/MYSQL');

// 定义model
const Cate = db.define('Cate', {
    id: { // 分类ID
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }},{
        tableName: 'cate', // MYSQL数据库表名
        underscored: true // 是否支持驼峰
    })

module.exports = Cate;
