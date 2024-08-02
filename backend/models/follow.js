const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

const Follow = sequelize.define('Follow', {
    followerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    followingId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

Follow.belongsTo(User, { as: 'follower', foreignKey: 'followerId' });
Follow.belongsTo(User, { as: 'following', foreignKey: 'followingId' });

module.exports = Follow;
