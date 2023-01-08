const { DataTypes } = require('sequelize')
const sequelize = require('./index.js')
const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    first_name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    last_name: {
        type: DataTypes.TEXT,
    },
    country: {
        type: DataTypes.TEXT
    },
    city: {
        type: DataTypes.TEXT,
    },
    phone_number: {
        type: DataTypes.TEXT
    },
    position: {
        type: DataTypes.TEXT,
    },
    company_id: {
        type: DataTypes.STRING
    },
    created_at: {
        type: DataTypes.STRING,
    },
    updated_at: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false
})
module.exports = { User }