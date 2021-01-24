const {DataTypes} = require('sequelize');
const db = require('../db/MYSQL');

// 定义model
const Article = db.define('Article', {
    id: { // 分类ID
        type: DataTypes.INTEGER, // 类型
        primaryKey: true, // 是否为主键
        allowNull: false, // 是否能为空
        autoIncrement: true // 是否递增
    },
    title: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false, // 是否能为空
    },
    cate: {
        type: DataTypes.INTEGER,
        allowNull: false, // 是否能为空
    },
    author: {
        type: DataTypes.STRING(45),
        allowNull: false, // 是否能为空
    },
},{
    tableName: 'article', // MYSQL数据库表名
    underscored: true // 是否支持驼峰
})

module.exports = Article;
