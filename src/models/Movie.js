const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');


const movie = sequelize.define('movie',{
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.TEXT,
        allowNull: false
    },

    synopsis: {
        type: DataTypes.STRING,
        allowNull: false
    },

    releaseYear: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
} );

module.exports = movie;