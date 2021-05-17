'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.createTable('User', {
      id:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      fullname:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      email:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password:{
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      phone:{
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
        unique: true,
        validate: {
          is: '\^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$'
        }
      },
      accountType:{
        type: Sequelize.DataTypes.ENUM,
        values: ['root', 'admin', 'user'],
        defaultValue: 'user'
      },
      dob:{
        type: Sequelize.DataTypes.DATE,
        allowNull: true
      },
      isActive:{
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
      },
      createdAt:{
        type: Sequelize.DataTypes.DATE,
        defaultValue: new Date()
      },
      updatedAt:{
          type: Sequelize.DataTypes.DATE,
          defaultValue: new Date()
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.dropTable('User');
  }
};
