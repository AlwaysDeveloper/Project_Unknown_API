import { Router } from 'express';
import { Guards } from '../middlewares';

import { AuthController } from './../controllers';

class Route {
    routes: Router = Router();
    constructor() {
        this.routes.post('/login', AuthController.login);
        this.routes.post('/create', AuthController.signup);
        this.routes.post('/forgotpassword', AuthController.forgotPassword);
        this.routes.post('/resetpassword/:token', AuthController.resetPassword, AuthController.login);
    }
}

export { Route as UserRouter }