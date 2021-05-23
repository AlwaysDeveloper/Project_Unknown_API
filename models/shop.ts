import path from "path";
import { Sequelize, DataTypes } from "sequelize";

var env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, './../../config/config.json'))[env];

const Shop = (sequelize: Sequelize) => {
    return sequelize.define('Shop', {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          unique: true,
          primaryKey: true
        },
        owner: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        address: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
        },
        gst: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        servingStatus: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
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
}

export default Shop;