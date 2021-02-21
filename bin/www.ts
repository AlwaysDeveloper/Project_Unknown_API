// importing the dotenv module to configure environment
import Dotenv from 'dotenv';
import Http from 'http';
import Mongoose from 'mongoose';
import Path from 'path';

import { helperfactory } from './../utils';
// import { Env } from './environment';
import { App } from './../app';

Dotenv.config({
    path: Path.join(__dirname, '/.env')
});

class Server{
    app: any = new App().app;
    port: Number = process.env.PORT ? parseInt(process.env.PORT) : 3500;
    mongo_link: string = process.env.MONGODB_LOCAL ? process.env.MONGODB_LOCAL : '';
    server: Http.Server = Http.createServer(this.app);
    constructor(){      
        console.log(typeof this.port, this.port);
        if(this.mongo_link === '')throw new Error('MongoURL not valid!');
        Mongoose.connect(this.mongo_link, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
          })
          .then(() => console.log('MonogoDB is now connected and ready for use \xF0\x9F\x98\x8F..'));
          
        this.server.listen(
            this.port,
            () => {
                console.log(
                    `server listening to API calls on: ${`\u001b[34mhttp://app.unknown.node/api/v1/\u001b[34m`}`
                );
            }
        );
    }

    unexcepted(){
        process.on('uncaughtException', error => helperfactory.serverCrash(error));
        process.on('unhandledRejection', error => helperfactory.serverRejection(error, this.server));
    }
}

(() => {
    console.log('Starting the server');
    new Server();
})();



