import Session from 'express-session';
import Redis from 'redis';
import ConnectRedis from 'connect-redis';

const RedisStore = ConnectRedis(Session);

class RedisConnect{
    private redisClient: any = Redis.createClient();
    public session: any = Session({
        secret: process.env.REDIS_SECRET ? process.env.REDIS_SECRET : "default",
        name: '__unknown',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false },
        store: new RedisStore({
            host: 'localhost',
            port: 6379,
            client: this.redisClient,
            ttl: 86400
        })
    });

    public setSession(token: any, user: any){
        this.redisClient.setex(
            token,
            5400,
            JSON.stringify(user)
        );
    }

    public getSession(token: any){
        return new Promise((resolve: Function, reject: Function) => {
            this.redisClient.get(token, (error: Error, val: any) => {
                if(error){
                    reject(error);
                    return;
                }
                if(val === null){
                    reject(new Error('no session'));
                    return;
                }
                try{
                    resolve(JSON.parse(val));
                }catch(err){
                    reject(new Error(err));
                }
            });
        });
    }

    public deleteSession(token: any){
        return new Promise((resolve: any, reject: any) => {
            this.redisClient.del(token, (error: Error, reply: any) => {
                if (error) {
                    reject(error);
                    return;
                }
                if (reply === null) {
                    resolve(null);
                    return;
                }
                try {
                    resolve(JSON.parse(reply));
                } catch (ex) {
                    resolve(ex);
                }
            });
        });
    }

    public updateSession(token: any, state: any){
        return new Promise((resolve: Function, reject: Function) => {
            this.redisClient.hmset(token,JSON.parse(state), (error: Error, val: any) => {
                if(error){
                    reject(error);
                    return;
                }else if(val === null){
                    reject(new Error('no session to update'));
                    return;
                }
                try{
                    resolve(JSON.parse(val));
                }catch(ex){
                    reject(ex);
                }
            });
        });
    }
}

export default RedisConnect;