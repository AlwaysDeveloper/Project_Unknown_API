import { Router } from "express";
import { ProductsController } from "../controllers";

class Route{
    router: Router = Router();
    constructor(){
        this.router.get('/', ProductsController.getAllProducts);
    }
}

export {Route as ProductsRoute}