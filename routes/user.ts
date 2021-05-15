import { Router } from 'express';

import { AuthController } from './../controllers';

const routes: Router = Router();

routes.post('/login', AuthController.login);
routes.post('/create', AuthController.signup);
routes.post('/forgoepassword', AuthController.forgotPassword);

export { routes as UserRouter }