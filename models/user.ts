import path from "path";
import { Sequelize, DataTypes } from "sequelize";

var env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, './../../config/config.json'))[env];

const User = (sequelize: Sequelize) => {
    return sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            unique: true,
            primaryKey: true
        },
        fullname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
            validate: {
                is: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
            }
        },
        accountType: {
            type: DataTypes.ENUM,
            values: ['root', 'admin', 'user', 'shop'],
            defaultValue: 'user'
        },
        dob: {
            type: DataTypes.DATE,
            allowNull: true
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "null"
        },
        createdAt:{
            type: DataTypes.DATE,
            defaultValue: new Date()
        },
        updatedAt:{
            type: DataTypes.DATE,
            defaultValue: new Date()
        }
    }, {
        tableName: 'user',
        timestamps: false,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    {
                        name: "id"
                    }
                ]
            }
        ]
    });
};

export default User;