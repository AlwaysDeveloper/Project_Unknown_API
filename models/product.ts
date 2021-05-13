import path, { resolve } from "path";
import { Sequelize } from "sequelize";
import { DataTypes, Model, ModelAttributes, ModelCtor, SchemaOptions } from "sequelize/types";
import { General } from "../interfaces";

var env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, './../../config/config.json'))[env];

class ProductModel{
    public id!: string;
    public name!: string;
    public manufacturer!: string;
    public price!: number;
    public main!: string;
    public sub!: string;
    public category!: string;
    [key: string]: any;

    public sequelize!: ModelCtor<Model>;

    protected schema: ModelAttributes = {
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
    }

    constructor(sequelize: Sequelize){
        const schema = this.schema;
        this.sequelize = sequelize.define('Product', schema);
    }
    
    fill(data: any){
        for(let i in data ){
            if(data[i] === null)data[i] = undefined;
            this[i] = data[i]
        }
    }

    async create(){
        return this.sequelize.create({
            id: this.createId(),
            name: this.name,
            price: this.price,
            manufacturer: this.manufacturer,
            main: this.main,
            sub: this.sub,
            category: this.category,
            createdAt: new Date(),
            updatedAt: new Date()
        });
    }

    getProduct(where: object){
        return new Promise(( resolve: Function, reject: Function ) => {
            this.sequelize.findAll( where )
            .then((products) => resolve(products))
            .catch((error: Error) => reject(error.message));
        });
    }

    updateProduct(where: object, updates: General){
        updates.updatedAt = new Date();
        return new Promise(( resolve: Function, reject: Function ) => {
            this.sequelize.update(updates, { returning: true, where })
            .then((updates) => resolve(true))
            .catch(( error: Error ) => reject(error.message))
        });
    }
    
    createId(){
        const id = `${ this.name }\\${ this.manufacturer }=${ this.main }\\${ this.category }[${ Math.floor( Date.now()/1000 ) }]`;
        return id;
    }
}

export default ProductModel;