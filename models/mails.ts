import Mongoose from 'mongoose';

const mailschema: Mongoose.Schema = new Mongoose.Schema({
    to: [{
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'must have atleast one recipent']
    }],
    cc: [{
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    bcc: [{
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    subject:{
        type: String,
        max: [255]
    },
    template: {
        type: String,
        required: [true, 'to send email template need']
    },
    token:{
        type: String
    },
    priority:{
        type: String,
        enum: ['low', 'mid', 'high', 'important'],
        default: 'important',
        required: [true, 'should have priority']
    }
});

const Email = Mongoose.model('Email', mailschema);

export default Email;