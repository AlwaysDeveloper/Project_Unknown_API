import Mongoose from 'mongoose';
import Validator from 'validator';
import { authUtil, helperfactory } from './../utils';

interface IUserDateModel{
    unique: string;
    email: string,
    fullname: string;
    dob: Date;
    address: string;
    photo: string;
    password: string | undefined;
    usertype: string;
    deparment: string;
    dateOfStart: Date;
    dateOfEnd: Date;
    dateOfPasswordChange: Date;
    [key: string]: any;
}

class UserModel implements IUserDateModel{
    unique!: string;
    email!: string;
    fullname!: string;
    dob!: Date;
    address!: string;
    photo!: string;
    password!: string | undefined;
    usertype!: string;
    deparment!: string;
    dateOfStart!: Date;
    dateOfEnd!: Date;
    dateOfPasswordChange!: Date;
    [key: string]: any;
    
    constructor(user: any, hash: boolean = false){
        for(let key in user){
            this[key] = user[key];
            if (key === 'password' && hash)this.hashPassword(this[key]);
        }
    }

    async hashPassword(password: string | undefined){
        if(!password)throw new Error("password cannot be undefined");
        const hased = await authUtil.getHashPassword(password);
        this.password = hased;
        return hased
    }
}

interface IUserMongoModel extends Mongoose.Document{
    unique: String;
    email: String;
    fullname: String;
    dob: Date;
    address: String;
    photo: String;
    password: String | undefined;
    usertype: String;
    deparment: String;
    dateOfStart: Date;
    dateOfEnd: Date;
    dateOfPasswordChange: Date;
}

const userschema: Mongoose.Schema = new Mongoose.Schema({
    unique: {
        type: String,
        unique: [true],
        required: [true, 'alread exist please chose diffrent']
    },
    email:{
        type: String,
        required: [true, 'need your email please!'],
        unique: true,
        lowercase: true,
        validate: [Validator.isEmail, 'not a valid email']
    },
    fullname: {
        type: String,
        required: [true, 'full name please']
    },
    dob: {
        type: Date,
        required: [true, 'date of birth needed']
    },
    address: {
        type: String,
        required: [true, 'current address needed']
    },
    photo: {
        type: String,
        default: 'default.jpg'
    },
    password:{
        type: String,
        select:false,
        minlength: 8,
        required: [true, 'password is required for security']
    },
    usertype: { 
        type: String,
        enum: ['root', 'admin', 'hod', 'pro', 'assis', 'lib', 'student'],
        required: [true, 'usertype required']
    },
    department: {
        type: String,
        enum: ['root', 'admin'],
        required: [true, 'user department need']
    },
    dateOfStart: Date,
    dateOfEnd: Date,
    dateOfPasswordChange: Date,
    active: {
        type: Boolean,
        default: true,
        select: false
    }
});

userschema.pre('/^find/', function(next: Function){
    this.find({
        active: { $ne: false }
    });
    next();
});

userschema.pre<IUserMongoModel>('save', async function(next: Function){
    if(!this.isModified('password'))return next();
    if(this.password)this.password = await authUtil.getHashPassword(this.password.toString())
    next();
});

userschema.post<IUserMongoModel>('save', function(){
    this.password = undefined;
})

const User = Mongoose.model('User', userschema);

export {User , UserModel};