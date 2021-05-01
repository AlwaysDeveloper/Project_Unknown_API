import path from "path";
import { Model, Sequelize, DataTypes, ModelCtor } from "sequelize";
import { authUtil } from "../utils";

var env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, './../../config/config.json'))[env];

class UserModel{
    public id!: string;
    public fullname!: string;
    public email!: string;
    public password!: string;
    public phone!: string;
    public accountType!: string;
    public dob!: Date;
    public isActive!: boolean;
    [key: string]: any;

    public sequelize!: ModelCtor<Model>;

    protected schema: any = {
        id: {
            type: DataTypes.STRING,
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
                is: '\^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$'
            }
        },
        accountType: {
            type: DataTypes.ENUM,
            values: ['root', 'admin', 'user'],
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
        createdAt:{
            type: DataTypes.DATE,
            defaultValue: new Date()
        },
        updatedAt:{
            type: DataTypes.DATE,
            defaultValue: new Date()
        }
    }

    constructor(sequelize: Sequelize){
        const schema = this.schema;
        this.sequelize = sequelize.define('User', schema);
    }

    fill(data: any){
        for(let i in data ){
            if(data[i] === null)data[i] = undefined;
            this[i] = data[i]
        }
    }

    async create(){
        const data = {
            id: this.createId(),
            fullname: this.fullname,
            email: this.email,
            password: await authUtil.getHashPassword(this.password),
            phone: this.phone,
            dob: this.dob,
            isActive: this.isActive,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        return this.sequelize.create(data);
    }

    getuser(where: object){
        return new Promise((reslove: Function, reject: Function) => {
            this.sequelize.findOne({ where }).then((user: any) => {
                for(let i in user.dataValues){
                    if(user.dataValues[i] === null)user.dataValues[i] = undefined;
                }
                user.dataValues.password = user.dataValues.createdAt = user.dataValues.updatedAt = undefined;
                reslove(user);
            }).catch((error) => reject(error)); 
        });
    }

    createId(){
        const emailSplit = this.email.split('@');
        const now = Math.floor(new Date().getTime()/1000);
        return `${emailSplit[0]}_${now}@${emailSplit[1]}`;
    }
}

export default UserModel;