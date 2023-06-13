'use strict';

/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
    options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Spots', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            ownerId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'Users',
                    key: 'id'
                }
            },
            address: {
                allowNull: false,
                type: Sequelize.STRING
            },
            city: {
                allowNull: false,
                type: Sequelize.STRING
            },
            state: {
                allowNull: false,
                type: Sequelize.STRING
            },
            country: {
                allowNull: false,
                type: Sequelize.STRING
            },
            lat: {
                allowNull: false,
                type: Sequelize.DECIMAL
            },
            lng: {
                allowNull: false,
                type: Sequelize.DECIMAL
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING
            },
            description: {
                allowNull: false,
                type: Sequelize.STRING
            },
            price: {
                allowNull: false,
                type: Sequelize.DECIMAL
            },
            avgRating: {
                type: Sequelize.DECIMAL
            },
            previewImage: {
                type: Sequelize.STRING
            },
            createdAt: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            },
            updatedAt: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            }
        }, options);
    },
    async down(queryInterface, Sequelize) {
        options.tableName = "Spots";
        return queryInterface.dropTable(options);
    }
};
