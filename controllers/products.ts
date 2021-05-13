import { RequestHandler } from "express";
import { Product } from "../models";
import { helperfactory } from "../utils";

class Products{
    getAllProducts: RequestHandler = helperfactory.catchAsync(
        async (req: any, res: any, next: Function) => {
            Product.getProduct({})
            .then(products => res.status(200).json({
                status: 'success',
                products
            }))
            .catch((error: Error) => { throw new Error(error.message) })
        }
    );

    addProducts: RequestHandler = helperfactory.catchAsync(
        async (req: any, res: any, next: Function) => {
            res.status(200).json({status: 'success'});
        }
    );

    editProducts: RequestHandler = helperfactory.catchAsync(
        async (req: any, res: any, next: Function) => {
            res.status(200).json({status: 'success'});
        }
    );

    delectProducts: RequestHandler = helperfactory.catchAsync(
        async (req: any, res: any, next: Function) => {
            res.status(200).json({status: 'success'});
        }
    );
}

export default Products;