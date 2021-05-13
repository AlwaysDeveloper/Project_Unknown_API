'use strict';

import { DataTypes, QueryInterface, Sequelize } from "sequelize/types";

module.exports = {
  up: async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const Schema = queryInterface.createTable('Products', {
      id:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      main:{
          type: DataTypes.ENUM,
          allowNull: false,
          values:[
              'general', 
              'mobile', 
              'computer', 
              'tv', 
              'electronics', 
              'appliance', 
              'fashion', 
              'sports', 
              'home', 
              'kitchen', 
              'pets', 
              'beauty', 
              'grocery', 
              'fitness', 
              'bags', 
              'luggage', 
              'toy', 
              'babyProducts', 
              'sanitory', 
              'book',
              'software',
              'games',
              'automobile',
              'hardware'
          ],
          defaultValue: 'general'
      },
      sub:{
          type: DataTypes.ENUM,
          allowNull: true,
          values:[
              'general',
              'phone',
              'tablet',
              'laptop',
              'desktop',
              'tv',
          ],
          defaultValue: 'general'
      },
      category:{
          type: DataTypes.ENUM,
          allowNull: false,
          values:[
              'mobile',
              'tablet',
              'laptop',
              'ssd',
              'hhd'
          ]
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
     return queryInterface.dropTable('Products');
  }
};
