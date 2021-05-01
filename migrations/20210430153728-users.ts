'use strict';

import { QueryInterface, Sequelize, DataTypes } from "sequelize";

module.exports = {
  up: async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const Schema = queryInterface.createTable('Users', {
      id:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      fullname:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone:{
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
        validate: {
          is: '\^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$'
        }
      },
      accountType:{
        type: DataTypes.ENUM,
        values: ['root', 'admin', 'user'],
        defaultValue: 'user'
      },
      dob:{
        type: DataTypes.DATE,
        allowNull: true
      },
      isActive:{
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
      },
      createdAt:{
        type: DataTypes.DATE,
        defaultValue: new Date()
      },
      updatedAt:{
          type: DataTypes.DATE,
          defaultValue: new Date()
      }
    });
    return Schema;
  },

  down: async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.dropTable('Users');
  }
};
