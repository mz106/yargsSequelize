const { Sequelize, DataTypes } = require("sequelize");
const connection = require("../db/connection");

const Movie = connection.define("Movies",
    {
        title: {
            type: DataTypes.STRING,
            get() {
                const rawValue = this.getDataValue('title');
                return rawValue.toUpperCase();
            }
        },

        actor: {
            type: DataTypes.STRING,
            get() {
                const rawValue = this.getDataValue('actor');
                return rawValue.toLowerCase();
            },

            set(value) {
                this.setDataValue('actor', value.toUpperCase());
            }
        }
    }

);


module.exports = {
    Movie,
};