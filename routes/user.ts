import { Router } from 'express';

import { AuthController } from './../controllers';

class Route {
    routes: Router = Router();
    constructor() {
        this.routes.post('/login', AuthController.login);
        this.routes.post('/create', AuthController.signup);
    }
}

export { Route as UserRouter }