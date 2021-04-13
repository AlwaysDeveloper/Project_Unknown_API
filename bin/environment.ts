class Environment{
    MONGO_LOCAL: string = 'mongodb://127.0.0.1:27017/erp_v1?readPreference=primary&appname=MongoDB%20Compass&ssl=false';
    
    PORT: Number = 3500;
    
    JWT_SECRET:string = '3e99231457f1b2bdf8601ab87e2dc5a1';
    JWT_EXPIRES_IN: string = '90d';
    JWT_COOKIE_EXPIRES_IN: Number = 30;
}

export {Environment as Env}