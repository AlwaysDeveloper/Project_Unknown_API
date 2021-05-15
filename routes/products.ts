import { Router } from "express";
import { ProductsController } from "../controllers";

const router: Router = Router();

router.get('/', ProductsController.getAllProducts);

export {router as ProductsRouter}