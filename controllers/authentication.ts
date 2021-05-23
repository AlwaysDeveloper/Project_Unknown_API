import { RequestHandler } from 'express';
import { db } from '../models';
import { Email } from '../models_mongo';
import { helperfactory, authUtil, AppError } from './../utils';

class Authentication{
    login: RequestHandler = helperfactory.catchAsync(
        async (req: any, res: any, next: Function) => {
            const { id, password } = req.body;
            if(!id || !password) return next(new AppError('id or password incorrect', 401));
            const { user } = db;
            user.getuser({email: id}).then(async (user: any) => {
                if(!user) return next(new AppError('id or password incorrect!', 401));
                if(user.password && !await authUtil.passwordCheck(password, user.password)) return next(new AppError('id or password incorrect!', 401));
                const token = authUtil.signToken(user.id);
                const cookieOptions = authUtil.cookieOptions(req, res);
                user.password = undefined;
                res.cookie('jwt', token, cookieOptions).status(200).json({
                    status: "success",
                    token: {
                        name: 'jwt',
                        token,
                        options: cookieOptions
                    },
                    user
                });
            }).catch((error: Error) => {next(new AppError(error.message, 401))});
        }
    );

    signup: RequestHandler = helperfactory.catchAsync(
        async (req: any, res: any, next: Function) => {
            if(!req.body.confirmPassword || (req.body.confirmPassword !== req.body.password)) return next( new AppError("password and confrim-password does not match", 401) );
            else if(!req.body.password.match('\^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*]).{8}')) return next( new AppError("password not secure", 401) );
            const { user } = db;
            user.fill(req.body);
            user.create().then(
                (user: any) => {
                    user = user.dataValues;
                    delete user.password;
                    const token = authUtil.signToken(user.id);
                    const cookieOptions = authUtil.cookieOptions(req, res);
                    res.cookie('jwt', token, cookieOptions).status(200).json({
                        status: "successfully created",
                        token,
                        user
                    });
                }
            ).catch((error: Error) => {
                next(new AppError(error.message, 401));
            });
        }
    );

    forgotPassword: RequestHandler = helperfactory.catchAsync( 
        async (req: any, res: any, next: Function) => {
            const { email } = req.body;
            const { user } = db;
            user.getuser({email}).then((user: any) => {
                if(!user || user=== null)return next(new AppError('User does not exist', 400));
                const action_url = `http://app.unknown.local/resetpassword/${authUtil.signToken(user?.id, false)}`;
                const mailOptions = {
                    to: [user?.id],
                    subject: 'Reset Password',
                    template: 'reset_password',
                    action_url,
                    priority: 3
                }
                Email.create(mailOptions);
                res.status(200).json({
                    status: 'email send'
                });
            }).catch((error: { message: string; }) => { next(new AppError(error.message, 401)); });
        }
    );
}

export default Authentication;