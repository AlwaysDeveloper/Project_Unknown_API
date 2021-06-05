import { RequestHandler } from "express";
import { helperfactory } from "../utils";

export default class Products{
    getAllProducts: RequestHandler = helperfactory.catchAsync(
        async (req: any, res: any, next: Function) => {
            
        }
    );
}
