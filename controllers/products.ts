import { RequestHandler } from "express";
import { helperfactory } from "../utils";

class Products{
    getAllProducts: RequestHandler = helperfactory.catchAsync(
        async (req: any, res: any, next: Function) => {
            res.status(200).json({status: 'success'});
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