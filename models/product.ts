import  Mongoose  from "mongoose";

interface IProductMongoModel extends Mongoose.Document{
    name: string;
    avaliableAt: any[];
    price: number;
    inStock: boolean;
    isReference: boolean;
    offer: any[];
}

const productschema: Mongoose.Schema = new Mongoose.Schema({
    name: {
        type: String,
        required: [true, 'a product need to have name']
    },
    avaliableAt: [{
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'Shops'
    }],
    price: {
        type: Number,
        required: [true, 'what is the price actually?']
    },
    inStock: {
        type: Boolean,
        required: [true, 'is it avaliable?']
    },
    isReference: {
        type: Boolean,
        default: false
    },
    offer: [{
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'Offers'
    }]
});

const Product = Mongoose.model('Product', productschema);

export {Product};