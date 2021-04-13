import Authentication from './authentication';
import Products from './products';

const AuthController = new Authentication();
const ProductsController = new Products();

export {
    AuthController,
    ProductsController
}