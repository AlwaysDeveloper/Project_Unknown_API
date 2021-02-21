import { helperfactory, authUtil, AppError } from './../utils';

import { User } from './../models';
import { UserModel } from './../models';
import { RequestHandler } from 'express';

class Authentication{
    login: RequestHandler = helperfactory.catchAsync(
        async (req: any, res: any, next: Function) => {
            const { id, password } = req.body;
            if(!id || !password) return next(new AppError('id or password incorrect', 401));
            
            const user = new UserModel(await User.findOne({$or:[{unique : id}, {email: id}]}).select('+password'));

            if(!user) return next(new AppError('id or password incorrect!', 401));
            if(user.password && !await authUtil.passwordCheck(password, user.password)) return next(new AppError('id or password incorrect!', 401)); 
            
            if(user.password || user._doc.password)user.password = user._doc.password = undefined;
            
            const token = authUtil.signToken(user._id);
            const cookieOptions = authUtil.cookieOptions(req, res);
            res.cookie('jwt', token, cookieOptions).status(200).json({
                status: "success",
                token,
                user
            });
        }
    );

    signup: RequestHandler = helperfactory.catchAsync(
        async (req: any, res: any, next: Function) => {
            if(!req.body.confirmPassword || (req.body.confirmPassword !== req.body.password)) return next( new AppError("password and confrim-password does not match", 401) );
            else if(!req.body.password.match('\^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*]).{8}')) return next( new AppError("password not secure", 401) );
            
            const newUser = new UserModel(req.body, true);
            await User.create(newUser).then(
                (_user: any) => {
                    const token = authUtil.signToken(_user._id);
                    const cookieOptions = authUtil.cookieOptions(req, res);
                    res.cookie('jwt', token, cookieOptions).status(200).json({
                        status: "successfully created",
                        token,
                        _user
                    });
                }
            );
        }
    );
}

export default Authentication;