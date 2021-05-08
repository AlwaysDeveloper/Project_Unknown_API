import JWT from 'jsonwebtoken';
import Bcrypt from 'bcryptjs';
import { promisify } from 'util';
import { DecodeToken } from '../interfaces';

class AuthUtil {
    signToken(id: string, auth: boolean = true, additional: object | undefined = undefined){
       if(!process.env.JWT_SECRET || !process.env.JWT_EXPIRES_IN) throw new Error('Cannot sign the token!');
       const secret: string = process.env.JWT_SECRET;
       const expiresIn: string = process.env.JWT_EXPIRES_IN;
       const signed: JWT.Secret = JWT.sign( 
           {
               id,
               auth,
               additional
           },
           secret,
           {
               expiresIn
           }
        );

        return signed;
    }

    cookieOptions(req: any, res: any) {
        const till: number = process.env.JWT_COOKIE_EXPIRES_IN ? parseFloat(process.env.JWT_COOKIE_EXPIRES_IN) : 30; 
        const httpOnly: boolean = true;
        const secure: any = !res.secure ? req.header['x-forwarded-proto'] === 'https' : res.secure;
        const options = {
            expires: new Date(Date.now() + till * 24 * 60 * 60 * 1000),
            secure,
            httpOnly
        }
        return options;
    }

    async decodeToken(token: string, complete: boolean = false){
        if(!process.env.JWT_SECRET) throw new Error('Cannot sign the token!');
        const secret: string = process.env.JWT_SECRET;  
        return new Promise((resolve: Function, reject: Function) => {
            try{
                const decoded = JWT.decode(token, { complete }) as DecodeToken;
                if(decoded === null) throw new Error('token is not valid!');
                let toReturn: any = {};
                for(const key of Object.keys(decoded) as Array<keyof DecodeToken>){ 
                    toReturn[key] = decoded[key];
                }
                resolve( toReturn );
            }catch(error: any){
                reject(error)
            }
        });
    }

    async passwordCheck(toCheck: string, byCheck: string){
        return await Bcrypt.compare(toCheck, byCheck);
    }

    async getHashPassword(password: string){
        return await Bcrypt.hash(password, 12);
    }

    async createResetPasswordToken(id: string){
        if(!process.env.JWT_SECRET) throw new Error('Cannot sign the token!');
        const secret: string = process.env.JWT_SECRET;
        const expiresIn: string = '30m';
        const signed: JWT.Secret = JWT.sign( 
            {
                id,
            },
            secret,
            {
                expiresIn
            }
        );
        return signed;
    }
}

export default AuthUtil;