import { Router } from 'express';
import { upload } from '../utils';

import { AuthController } from './../controllers';

const routes: Router = Router();

routes.post('/login', AuthController.login);
routes.post('/create', AuthController.signup);
routes.post('/forgoepassword', AuthController.forgotPassword);

routes.post('/', upload.toServer, (req, res, next) => {
    console.log(req.body);
    res.status(200).json({status: "Hello There.....!"});
});

export { routes as UserRouter }