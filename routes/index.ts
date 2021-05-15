import { Router } from 'express';
import { AppError } from '../utils';
import { ProductsRouter } from './products';
import { UserRouter } from './user';

const router: Router = Router();

router.use('/user', UserRouter);
router.use('/product', ProductsRouter)
router.use('*', (req: any, res: any, next: Function) => next(new AppError(`Can't able to find ${req.originalUrl} on the server!`, 404)));

export default router;