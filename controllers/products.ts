import { RequestHandler } from "express";
import { helperfactory } from "../utils";

class Products{
    getAllProducts: RequestHandler = helperfactory.catchAsync(
        async (req: any, res: any, next: Function) => {
            
        }
    );
}

export default Products;