import { Router } from "express";
import { ProductsController } from "../controllers";
import { Guards } from "../middlewares";

class Route{
    router: Router = Router();
    constructor(){
        this.router.get('/', ProductsController.getAllProducts);
        this.router.post('/addproduct', Guards.adminOnly, ProductsController.addProducts);
        this.router.post('/updateproduct/:productID', Guards.adminOnly, ProductsController.editProducts);
        this.router.delete('/:productID', Guards.adminOnly, ProductsController.delectProducts);
    }
}

export {Route as ProductsRoute}