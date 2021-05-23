'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.createTable('Shop', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      owner: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      gst: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      servingStatus: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      createdAt:{
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt:{
          type: Sequelize.DATE,
          defaultValue: new Date()
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     return queryInterface.dropTable('Shop');
  }
};
