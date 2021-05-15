// importing the dotenv module to configure environment
import Dotenv from 'dotenv';
import Http from 'http';
import Mongoose from 'mongoose';
import Path from 'path';

import { authUtil, helperfactory } from './../utils';
// import { Env } from './environment';
import { App } from './../app';

Dotenv.config({
    path: Path.join(__dirname, './../../.env')
});

class Server{
    app: any = new App().app;
    port: Number = process.env.PORT ? parseInt(process.env.PORT) : 3500;
    mongo_link: string = process.env.MONGODB_LOCAL ? process.env.MONGODB_LOCAL : '';
    server: Http.Server = Http.createServer(this.app);
    date: Date = new Date();
    constructor(){   
        this.setenv();   
        if(this.mongo_link === '')throw new Error('MongoURL not valid!');
        Mongoose.connect(this.mongo_link, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
          })
          .then(() => {
              const instance = `${this.date.getUTCDate()}-${this.date.getUTCMonth()}-${this.date.getUTCFullYear()} ${this.date.getUTCHours()}:${this.date.getUTCMinutes()}:${this.date.getUTCSeconds()}:${this.date.getUTCMilliseconds()}`;
              console.log(`[${instance}] \x1b[32mMonogoDB is now connected and ready for use \xF0\x9F\x98\x8F.."\x1b[32m`);
            });
          
        this.server.listen(
            this.port,
            () => {
                const instance = `${this.date.getUTCDate()}-${this.date.getUTCMonth()}-${this.date.getUTCFullYear()} ${this.date.getUTCHours()}:${this.date.getUTCMinutes()}:${this.date.getUTCSeconds()}:${this.date.getUTCMilliseconds()}`;
                console.log(
                    `[${instance}] server listening to API calls on: ${`\u001b[34mhttp://app.unknown.node/api/v1/\u001b[34m`}`
                );
            }
        );
    }

    unexcepted(){
        process.on('uncaughtException', error => helperfactory.serverCrash(error));
        process.on('unhandledRejection', error => helperfactory.serverRejection(error, this.server));
    }

    async setenv(){
        process.env.REDIS_PASS = process.env.REDIS_PASS ? await authUtil.getHashPassword(process.env.REDIS_PASS) : '';
        process.env.REDIS_HOST = process.env.REDIS_HOST ? process.env.REDIS_HOST : 'localhost';
        process.env.REDIS_PORT = process.env.REDIS_PORT ? process.env.REDIS_PORT : '6379';
        process.env.REDIS_TTL = process.env.REDIS_TTL ? process.env.REDIS_TTL : '86400';
    }
}

(() => {
    console.log('Starting the server');
    new Server();
})();



