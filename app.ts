import Express from 'express';
import Cors from 'cors';
import Helmet from 'helmet';
import Morgan from 'morgan';
import CookiesParser from 'cookie-parser';
import RateLimit from 'express-rate-limit';
import MongoSanitize from 'express-mongo-sanitize';

const xss_clean = require('xss-clean');

import { AppError } from './utils';
import router from './routes';
import { db } from './models';

export default class App {
    app: Express.Application = Express();
    constructor() {
        this.app.enable('trust proxy');
        this.app.use(Cors());
        this.app.use(Helmet());
        this.app.use(Morgan('combined'));
        this.app.use(xss_clean());
        this.app.use(CookiesParser());
        this.app.use(Express.json({limit: '15kb'}));
        this.app.use(MongoSanitize());
        this.app.use(Express.urlencoded({
            extended: true,
            limit: '15kb'
        }));
        this.app.use('/api', RateLimit({
            max: 150,
            windowMs: 60 * 60 * 1000,
            message: 'You got you request quota full this IP, try again after an hour'
        }));
        this.setRoutes();
    }

    setRoutes(){
        this.app.use('/api/v1', (req: any, res: any, next: Function) => {
            req['db'] = db;
            next();
        }, router);
    }
}