import Express from 'express';
import Cors from 'cors';
import Helmet from 'helmet';
import Morgan from 'morgan';
import CookiesParser from 'cookie-parser';
import RateLimit from 'express-rate-limit';
import MongoSanitize from 'express-mongo-sanitize';

const xss_clean = require('xss-clean');

import { user } from './routes';
import { AppError } from './utils';

class App {
    app: Express.Application = Express();
    corsOptions: Cors.CorsOptions = {
        credentials: true,
        origin: 'http://localhost:4400'
    };
    constructor() {
        this.app.enable('trust proxy');
        this.app.use(Cors(this.corsOptions));
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
        this.app.use(Express.static(`${__dirname}/web`));
        this.app.use('/api/v1/users', user);
        this.app.use('*', (req: any, res: any, next: Function) => next(new AppError(`Can't able to find ${req.originalUrl} on the server!`, 404)));
    }
}

export { App as App }