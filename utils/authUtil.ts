import JWT from 'jsonwebtoken';
import Bcrypt from 'bcryptjs';
import { promisify } from 'util';

class AuthUtil {
    signToken(id: string, auth: boolean = true){
       if(!process.env.JWT_SECRET || !process.env.JWT_EXPIRES_IN) throw new Error('Cannot sign the token!');
       const secret: string = process.env.JWT_SECRET;
       const expiresIn: string = process.env.JWT_EXPIRES_IN;
       console.log(id);
       const signed: JWT.Secret = JWT.sign( 
           {
               id,
               auth
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

    async decodeToken(token :string){
        if(!process.env.JWT_SECRET) throw new Error('Cannot sign the token!');
        const secret: string = process.env.JWT_SECRET;
        const decoded = await promisify(JWT.decode)(token, { complete: true });
        return decoded;
    }

    async passwordCheck(toCheck: string, byCheck: string){
        return await Bcrypt.compare(toCheck, byCheck);
    }

    async getHashPassword(password: string){
        return await Bcrypt.hash(password, 12);
    }
}

export default AuthUtil;