class Guard{
    adminOnly(req: any, res: any, next: Function){
        next();
    }
    localstrategies(){}
}

export default Guard;