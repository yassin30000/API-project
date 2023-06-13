'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Booking extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {

            // many bookins belong to one user
            Booking.belongsTo(
                models.User,
                { foreignKey: "userId" }
            );

            // many bookings have one spot
            Booking.belongsTo(
                models.Spot,
                { foreignKey: "spotId" }
            );
        }
    }
    Booking.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        spotId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Spots',
                key: 'id'
            }
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        startDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        endDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Booking',
    });
    return Booking;
};
