export default class HelperFactory{
    serverCrash(error: Error){
        console.log('Server is going down unexpectedly 😑..');
        console.log(error.name, error.message);
        process.exit(1);
    }

    serverRejection(error: any, server: any){
        console.log('UNHANDLED REJECTION! 💥 Shutting down..');
        console.log(error.name, error.message);
        server.close(() => {
          process.exit(1);
        });
    }

    catchAsync(fn: Function){
        return (req: any, res: any, next: Function) => {
            fn(req, res, next).catch(next);
        }
    }
}
